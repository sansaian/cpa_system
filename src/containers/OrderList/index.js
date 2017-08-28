import React, {Component} from 'react';

export default class OrderList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>Definition List 1</h2>
                    <dl>
                        <dt>CSS</dt>
                        <dd>Cascading Style Sheets</dd>
                        <dt>HTML</dt>
                        <dd>HyperText Markup Language</dd>
                        <dt>How To Meet Ladies</dt>
                        <dd>Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et
                            gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus
                            unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio
                            incongruous feline nolo contendre.</dd>
                    </dl>
                </div>
            </div>
        );
    }
}