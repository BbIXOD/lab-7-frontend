import React, { Component } from 'react';
import styles from "./GoodsCard.module.css";

export default class GoodsCard extends Component {
    render() {
        const { name, price, imageUrl } = this.props;

        return (
            <div className={styles.goodsCard}>
                <img src={imageUrl} alt={name} className={styles.goodsImage} />
                <h3 className={styles.goodsName}>Назва: {name}</h3>
                <p className={styles.goodsPrice}>Ціна: {price}</p>
            </div>
        );
    }
}
