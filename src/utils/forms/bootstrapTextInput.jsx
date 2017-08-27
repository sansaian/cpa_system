import React from 'react';
import TextInput from "./textInput";

export default class BootstrapTextInput extends TextInput {
    render() {
        const inputClass = (this.props.error === null || this.props.error === false) ? "form-group" : "has-error form-group";
        const labelClass = (this.props.isRequired === true) ? "required-field" : "";
        const isDisabled = (this.props.disabled === true); 

        let value = this.props.value;
        
        if (this.props.preformatting !== undefined && this.props.value !== '') {
            value = this.props.preformatting(value);
        }
        
        return <div className={inputClass}>
            <label className={labelClass}>{this.props.label}</label>
            <input
                className="form-control"
                type={this.props.type}
                placeholder={this.props.placeholder}
                name={this.props.name}
                onChange={(event) => this.onChange(event)}
                onBlur={(event) => this.onBlur(event)}
                value={value}
                disabled={isDisabled}
                onKeyDown={this.onKeyDown}
            />
            <div className="text-danger">
                {this.props.error}
            </div>
        </div>
    }
}
    