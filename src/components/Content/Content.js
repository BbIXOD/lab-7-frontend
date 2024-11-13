import React, { Component } from "react";
import styles from "./Content.module.css";

export default class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModified1: true,
            isModified2: true
        };
    }

    changeStyleById = () => {
        this.setState((prevState) => ({
            isModified1: !prevState.isModified1
        }));
    };

    getElementByQuery = () => {
        this.setState((prevState) => ({
            isModified2: !prevState.isModified2
        }));
    };

    render() {
        const { isModified1, isModified2 } = this.state;

        return (
            <div>
                <p>
                    Дата народження: 16.07.2005;<br />Місце: м. Сімферополь
                </p>
                <p>
                    Школа: Благодатненський ліцей;<br />Вища освіта: НТУУ "КПІ ім. Сікорського"
                </p>

                <br />
                Хобі:
                <ul>
                    <li
                        id="element4"
                        className={isModified1 ? styles.modified1 : styles.modified2}
                        onClick={this.changeStyleById}
                    >
                        Гітара
                    </li>
                    <li
                        className={isModified2 ? styles.modified2 : styles.modified1}
                        onClick={this.getElementByQuery}
                    >
                        Читання
                    </li>
                    <li>Комп'ютерні ігри й взагалі ПЗ</li>
                    <li>Прокрастинація</li>
                </ul>
                <br />
                Улюблені фільми:
                <ol>
                    <li>Автостопом по галактиці, 2005</li>
                    <li>Війна світів, 2005</li>
                    <li>День бабака, 1993</li>
                </ol>
                <br />
                <p>
                    Микола́їв (МФА: [mɪkoˈɫɑjɪu̯] ( прослухати)) — місто-герой України, обласний центр Миколаївської області та
                    адміністративний центр Миколаївського району.Миколаїв розташований у гирлі річки Інгул, де вона впадає до
                    Південного Бугу, за 65 кілометрів від Чорного моря. Дев'яте за кількістю мешканців місто України з населенням
                    470 011 осіб.
                </p>
                <br />
            </div>
        );
    }
}
