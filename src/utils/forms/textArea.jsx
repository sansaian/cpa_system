import {Component} from 'react';
import PropTypes from 'prop-types';

export default class TextArea extends Component {
    constructor(props, context) {
        super(props, context);

        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onChange(event) {
        this.props.onChange(this.props.name, event.target.value);
    }

    onBlur(event) {
        this.props.onBlur(this.props.name, event.target.value);
    }

    render() {
        return "Input rendering should be overwritten";
    }
}

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    validation: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
};