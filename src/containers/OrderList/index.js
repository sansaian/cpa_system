import React, {Component} from 'react';
import {makeApiGet} from "../../utils/apiCalls";

export default class OrderList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            items: []
        },

        this.drawRows = this.drawRows.bind(this);
    }

    componentDidMount() {
        const url = 'http://localhost:3000/api/offer';
        makeApiGet(url).then((data) => {
            this.prepareRows(data);
        });
    }

    prepareRows(data) {
        let newState = Object.assign({}, this.state);
        for (let i = 0; i < data.length; i++) {
            newState.items[data[i].id] = data[i];
        }
        this.setState(newState);
    }

    drawRows() {
        let result = [];
        let currentRow;
        for (let i = 0; i < this.state.items.length; i++) {
            currentRow = this.state.items[i];
            result.push(
                <div className="row">
                    <h2>Предложение от {currentRow.name}</h2>
                    <dl>
                        <dt>Стоймость действия</dt>
                        <dd>{currentRow.price}</dd>
                        <dt>Стоймость действия</dt>
                        <dd>{currentRow.price}</dd>
                        <dt>Возраст</dt>
                        <dd>{currentRow.age}</dd>
                        <dt>Описание</dt>
                        <dd>{currentRow.description}</dd>
                    </dl>
                </div>
            );
        }
        return result;
    }

    render() {
        return (
            <div className="container">
                {this.drawRows()}
            </div>
        );
    }
}