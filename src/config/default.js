module.exports = {
  host: process.env.NODE_HOST || 'localhost',
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'ru' },
    title: 'CPA for ABB',
    titleTemplate: 'CPA for ABB - %s',
    meta: [
      {
        name: '',
        content: '',
      },
    ],
  },
};
