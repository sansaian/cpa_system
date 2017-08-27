const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);

    const sharedConfig = () => ({
        stats: { modules: false },
        resolve: { extensions: ['.js', '.jsx'] },
        output: {
            filename: '[name].js',
            publicPath: '/dist/' // Webpack dev middleware, if enabled, handles requests for this URL prefix
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    include: /App/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ["env", "react", "es2015", "flow", "stage-0"],
                            env: {
                                start: {
                                    presets: ["react-hmre"]
                                }
                            }
                        }
                    }
                }
            ]
        }
    });

    // Configuration for client-side bundle suitable for running in browsers
    const clientBundleOutputDir = './wwwroot/dist';

    const clientBundleConfig = merge(sharedConfig(),
        {
            entry: {'main-client': './App/boot-client.jsx'},
            module: {
                rules: [
                    {
                        test: /\.css$/,
                        use: ExtractTextPlugin.extract({use: isDevBuild ? 'css-loader' : 'css-loader?minimize'})
                    },
                    {test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000'}
                ]
            },
            output: { path: path.join(__dirname, clientBundleOutputDir) },
            plugins: [
                new ExtractTextPlugin('site.css'),
                new webpack.DllReferencePlugin({
                    context: __dirname,
                    manifest: require('./wwwroot/dist/vendor-manifest.json')
                })
            ].concat(isDevBuild
                ? [
                    // Plugins that apply in development builds only
                    new webpack.SourceMapDevToolPlugin({
                        filename: '[file].map', // Remove this line if you prefer inline source maps
                        moduleFilenameTemplate:
                            path.relative(clientBundleOutputDir,
                                '[resourcePath]') // Point sourcemap entries to the original file locations on disk
                    })
                ]
                : [
                    // Plugins that apply in production builds only
                    new webpack.optimize.UglifyJsPlugin()
                ])
        });

    return [clientBundleConfig];
};