import React from 'react';
import PropTypes from 'prop-types';

export default class SelectInput extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.prepareOptions = this.prepareOptions.bind(this);
    }

    onChange(event) {
        this.props.onChange(this.props.name, event.target.value);
    }

    onBlur(event) {
        this.props.onBlur(this.props.name, event.target.value);
    }
    
    prepareOptions() {
        let result = [];
        
        Object.keys(this.props.options).map(function(key, index) {
            result.push(
                <option key={key} value={key}>{this.props.options[key]}</option>
            );
        }.bind(this));
        
        return result;
    }

    render() {
        return "Select rendering should be overwritten";
    }
}

SelectInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    validation: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    options: PropTypes.object.isRequired,
    defaultValue: PropTypes.string 
};