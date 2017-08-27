import {Component} from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }
    
    onChange(event) {
        let value = event.target.value;
        
        if (this.props.postformatting !== undefined && this.props.value !== '') {
            value = this.props.postformatting(value);
        }
        
        this.props.onChange(this.props.name, value);
    }

    onBlur(event) {
        let value = event.target.value;

        if (this.props.postformatting !== undefined && this.props.value !== '') {
            value = this.props.postformatting(value);
        }
        
        this.props.onBlur(this.props.name, value);
    }

    onKeyDown(e) {
        if (e.key === 'Backspace' || e.key === 'Delete') {
            if (this.props.postformatting !== undefined && this.props.value !== '') {
                e.target.value = this.props.postformatting(e.target.value);
            }
        }
    }

    render() {
        return "Input rendering should be overwritten";
    }
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    validation: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    type: PropTypes.string,
    preformatting: PropTypes.func,
    postformatting: PropTypes.func
};