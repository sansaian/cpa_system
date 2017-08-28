import React from 'react';
import BootstrapTextInput from "../../utils/forms/bootstrapTextInput";
import {isEmpty} from "../../utils/formValidations";
import BaseForm from "../../utils/forms/baseForm";
import BootstrapSelectInput from "../../utils/forms/bootstrapSelectInput";

export default class EditEmail extends BaseForm {
    constructor(props, context) {
        super(props, context);

        this.state = {
            link: '',
            price: '',
            goal: '',
            description: '',
            geography: '',
            source: '',
            age: '',

            goalTypes: [
                "Подтвержденная регистрация",
                "Оплата заказа",
                "Заказ карты",
                "Донат на ICO бабушке друга"
            ],

            errors: {
                link: null,
                price: null,
                goal: null,
                description: null,
                geography: null,
                source: null,
                age: null
            },

            validations: {
                link: [
                    {
                        func: isEmpty,
                        errorMessage: "Поле не может быть пустым"
                    }
                ],
                price: [
                    {
                        func: isEmpty,
                        errorMessage: "Поле не может быть пустым"
                    }
                ],
                goal: [
                    {
                        func: isEmpty,
                        errorMessage: "Поле не может быть пустым"
                    }
                ],
                description: [
                    {
                        func: isEmpty,
                        errorMessage: "Поле не может быть пустым"
                    }
                ],
                geography: [
                    {
                        func: isEmpty,
                        errorMessage: "Поле не может быть пустым"
                    }
                ],
                source: [
                    {
                        func: isEmpty,
                        errorMessage: "Поле не может быть пустым"
                    }
                ],
                age: [
                    {
                        func: isEmpty,
                        errorMessage: "Поле не может быть пустым"
                    }
                ]
            }
        }
    }

    submitForm() {
        // if (this.state.code === null) {
        //     api.changePassword(this.state.oldPassword, this.state.newPassword).then((data) => {
        //         this.handleResult(data);
        //     });
        // } else {
        //     api.confirmResetPassword(this.state.code, this.state.newPassword).then((data) => {
        //         this.handleResult(data);
        //     });
        // }
    }

    handleResult(data) {
        let newState = Object.assign({}, this.state);

        switch (data.status) {
            case "success":
                newState.message = {
                    type: "success",
                    text: "Пароль успешно изменен"
                };

                const name = this.state.email;

                const promise = new Promise(
                    function (resolve) {
                        logIn(name);
                        resolve('success');
                    });

                promise.then(this.setState(newState));
                break;
            default:
                for (let errorField in data.data) {
                    if (data.data.hasOwnProperty(errorField)) {
                        if (errorField === "errors" || errorField === "") {
                            newState.message = {
                                type: "fail",
                                text: data.data[errorField][0]
                            };
                            continue;
                        }

                        newState.errors[errorField.toLowerCase()] = [data.data[errorField][0]];
                    }
                }

                break;
        }

        this.setState(newState);
    };

    prepareMessage() {
        if (this.state.hasOwnProperty("message") && this.state.message) {
            switch (this.state.message.type) {
                case "success":
                    return <div className="panel panel-success">
                        <div className="panel-heading">Успех!</div>
                        <div className="panel-body">{this.state.message.text}</div>
                    </div>;
                default:
                    return <div className="panel panel-danger">
                        <div className="panel-heading">Ошибка</div>
                        <div className="panel-body">{this.state.message.text}</div>
                    </div>;
            }
        } else {
            return "";
        }
    };

    render() {
        // link: '',
        //     price: '',
        //     goal: '',
        //     description: '',
        //     geography: '',
        //     source: '',
        //     age: '',
        return <form onSubmit={this.onSubmit}>
            <div className="row col-md-4 col-md-offset-4 top-buffer">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Создайте предложерие для вебмастера</h3>
                    </div>
                    <div className="panel-body">
                        <BootstrapTextInput
                            onChange={this.onChange}
                            onBlur={this.onBlur}
                            value={this.state['link']}
                            error={this.state.errors['link']}
                            validation={this.state.validations['link']}
                            type={"text"}
                            name="link"
                            placeholder=""
                            isRequired="true"
                            label="Ссылка на целевую страницу"
                        />
                        <BootstrapTextInput
                            onChange={this.onChange}
                            onBlur={this.onBlur}
                            value={this.state['price']}
                            error={this.state.errors['price']}
                            validation={this.state.validations['price']}
                            type={"text"}
                            name="price"
                            placeholder=""
                            label="Стоймость выполнения цели"
                        />
                        <BootstrapSelectInput
                            onChange={this.onChange}
                            onBlur={this.onBlur}
                            value={this.state['goal']}
                            error={this.state.errors['goal']}
                            validation={this.state.validations['goal']}
                            type={"text"}
                            name="goal"
                            placeholder=""
                            label="Стоймость выполнения цели"
                        />
                        <BootstrapTextInput
                            onChange={this.onChange}
                            onBlur={this.onBlur}
                            value={this.state['price']}
                            error={this.state.errors['price']}
                            validation={this.state.validations['price']}
                            type={"text"}
                            name="price"
                            placeholder=""
                            label="Стоймость выполнения цели"
                        />
                        {this.prepareMessage()}
                        <div className="form-group">
                            <div className="col-md-6 col-md-offset-3">
                                <input className="btn btn-md btn-success btn-block" type="submit" value="Создать!"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>;
    }
}