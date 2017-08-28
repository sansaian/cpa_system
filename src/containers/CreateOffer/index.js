import React from 'react';
import BootstrapTextInput from "../../utils/forms/bootstrapTextInput";
import {isEmpty} from "../../utils/formValidations";
import BaseForm from "../../utils/forms/baseForm";
import BootstrapSelectInput from "../../utils/forms/bootstrapSelectInput";
import BootstrapTextArea from "../../utils/forms/bootstrapTextArea";
import {makeApiPost} from "../../utils/apiCalls";

export default class EditEmail extends BaseForm {
    constructor(props, context) {
        super(props, context);

        this.state = {
            link: '',
            price: '',
            goal: 1,
            description: '',
            source: '',
            age: '',

            goalTypes: {
                1: "Подтвержденная регистрация",
                2: "Оплата заказа",
                3: "Заказ карты",
                4: "Лиды для ICO бабушки",
            },

            errors: {
                link: null,
                price: null,
                goal: null,
                description: null,
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
        let result = {
            name: 'Рекламодатель',
            price: this.state.price,
            goal: this.state.goalTypes[this.state.goal],
            description: this.state.description,
            source: this.state.source,
            age: this.state.age,
        };

        const url = 'http://localhost:3000/api/offer';
        makeApiPost(url, JSON.stringify(result)).then(() => {
            this.handleResult();
        });
    }

    handleResult() {
        let newState = Object.assign({}, this.state);

        newState.message = {
            type: "success",
            text: "Вы успешно разместили заказ, скоро трафик польется рекой ;)"
        };

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
        return <form onSubmit={this.onSubmit}>
            <div className="row col-md-4 col-md-offset-4 top-buffer">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Создайте предложение для вебмастера</h3>
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
                            options={this.state.goalTypes}
                            validation={this.state.validations['goal']}
                            type={"text"}
                            name="goal"
                            placeholder=""
                            label="Цель"
                        />
                        <BootstrapTextArea
                            onChange={this.onChange}
                            onBlur={this.onBlur}
                            value={this.state['description']}
                            error={this.state.errors['description']}
                            validation={this.state.validations['description']}
                            type={"text"}
                            name="description"
                            placeholder=""
                            label="Описание"
                        />
                        <BootstrapTextInput
                            onChange={this.onChange}
                            onBlur={this.onBlur}
                            value={this.state['age']}
                            error={this.state.errors['age']}
                            validation={this.state.validations['age']}
                            type={"text"}
                            name="age"
                            placeholder=""
                            label="Возраст целевой аудитории"
                        />
                        <BootstrapTextArea
                            onChange={this.onChange}
                            onBlur={this.onBlur}
                            value={this.state['source']}
                            error={this.state.errors['source']}
                            validation={this.state.validations['source']}
                            type={"text"}
                            name="source"
                            placeholder=""
                            label="Источники трафика"
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