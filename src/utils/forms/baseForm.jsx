import {Component} from 'react';

export default class BaseForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.onChange = this.onChange.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.getInputValidationError = this.getInputValidationError.bind(this);
        this.isFormValid = this.isFormValid.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onChange(name, value) {
        let newState = Object.assign({}, this.state);

        newState[name] = value;

        if (this.state.errors[name] !== null) {
            let errors = this.getInputValidationError(name, value);
            newState.errors[name] = errors !== '' ? errors : false;
        }

        this.setState(newState);
    }

    onChangeFile(name, value) {
        let newState = Object.assign({}, this.state);

        newState[name] = {
            file: value,
            fileName: value.name
        };

        this.setState(newState);
    }

    onBlur(name, value) {
        let newState = Object.assign({}, this.state);

        newState[name] = value;

        let errors = this.getInputValidationError(name, value);
        newState.errors[name] = errors !== '' ? errors : false;

        this.setState(newState);
    }

    getInputValidationError(name, value) {
        let errors = '';

        for (let i = 0, len = this.state.validations[name].length; i < len; i++) {
            const currentValidation = this.state.validations[name][i];
            const validationFunction = currentValidation.func.bind(this);

            if (!validationFunction(value)) {
                errors += '\n ' + currentValidation.errorMessage;
            }

            if (currentValidation.hasOwnProperty("bind")) {
                for (let bindName in currentValidation.bind) {
                    if (currentValidation.bind.hasOwnProperty(bindName)) {
                        errors = this.getInputValidationError(bindName, value);
                    }
                }
            }
        }

        return errors;
    }

    isFormValid() {
        let _that = this;
        let newState = Object.assign({}, this.state);
        let isValid = true;

        //Iterating over validations object
        Object.keys(this.state.validations).map(function (fieldName, index) {
            let currentField = _that.state.validations[fieldName];

            let errors = '';

            //Iterating over every validation for a given field
            for (let i = 0, len = currentField.length; i < len; i++) {
                const currentValidation = currentField[i];
                const validationFunction = currentValidation.func.bind(_that);

                if (!validationFunction(_that.state[fieldName])) {
                    errors += '\n ' + currentValidation.errorMessage;
                }

                if (currentValidation.hasOwnProperty("bind")) {
                    for (let property in currentValidation.bind) {
                        if (currentValidation.bind.hasOwnProperty(property)) {
                            let bindedErrors = _that.getInputValidationError(property, _that.state[property]);

                            if (bindedErrors !== '') {
                                newState.errors[property] = bindedErrors;
                                isValid = false;
                            }
                        }
                    }
                }

                if (errors !== '') {
                    newState.errors[fieldName] = errors;
                    isValid = false;
                } else {
                    newState.errors[fieldName] = false;
                }
            }
        });

        if (!isValid) {
            this.setState(newState);
        }

        return isValid;
    }

    onSubmit(event) {
        event.preventDefault();

        if (this.isFormValid()) {
            this.submitForm();
        }
    }

    submitForm() {
        console.log("submitForm method should be overwritten");
    }

    render() {
        return "Form rendering should be overwritten";
    }
}