import React from 'react';
import TextArea from "./textArea";

export default class BootstrapTextArea extends TextArea {
    render() {
        const inputClass = (this.props.error === null || this.props.error === false) ? "form-group" : "has-error form-group";
        const labelClass = (this.props.isRequired === true) ? "required-field" : "";

        return <div className={inputClass}>
            <label className={labelClass}>{this.props.label}</label>
            <textarea
                className="form-control"
                name={this.props.name}
                onChange={(event) => this.onChange(event)}
                onBlur={(event) => this.onBlur(event)}
                value={this.props.value}
            />
            <div className="text-danger">
                {this.props.error}
            </div>
        </div>
    }
}
    