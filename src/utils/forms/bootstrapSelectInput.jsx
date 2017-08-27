import React from 'react';
import SelectInput from "./selectInput";

export default class BootstrapSelectInput extends SelectInput {
    render() {
        const inputClass = (this.props.error === null || this.props.error === false) ? "form-group" : "has-error form-group";
        const labelClass = (this.props.isRequired === true) ? "required-field" : "";

        return <div className={inputClass}>
            <label className={labelClass}>{this.props.label}</label>

            <select
                className="form-control"
                placeholder={this.props.placeholder}
                name={this.props.name}
                onChange={(event) => this.onChange(event)}
                onBlur={(event) => this.onBlur(event)}
                value={this.props.value}>
                    {this.prepareOptions()}
            </select>
                
            <div className="text-danger">
                {this.props.error}
            </div>
        </div>
    }
}
    