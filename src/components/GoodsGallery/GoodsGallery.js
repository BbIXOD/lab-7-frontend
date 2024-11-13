import React, { Component } from 'react'
import GoodsCard from '../GoodsCard/GoodsCard.js'
import styles from './GoodsGallery.module.css'

export default class GoodsGallery extends Component {
    render() {
        const products = [
            {
                id: 1,
                name: 'Ноутбук з вентиляторами що погано працюють на лінукс',
                price: 25000,
                imageUrl: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww'
            },
            {
                id: 2,
                name: 'Мобільний (не дуже) телефон',
                price: 15000,
                imageUrl: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmV8ZW58MHx8MHx8fDA%3D'
            },
            {
                id: 3,
                name: 'Навушники (марка невідома)',
                price: 5000,
                imageUrl: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D'
            },
            {
                id: 4,
                name: 'Мишка', // TODO: rename to hamster when petition will have more signatures 
                price: 3000,
                imageUrl: 'https://images.unsplash.com/flagged/photo-1561023367-4431103a484f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGMlMjBtb3VzZXxlbnwwfHwwfHx8MA%3D%3D'
            },
            {
                id: 5,
                name: 'Комп\'ютер, жовтий',
                price: 40000,
                imageUrl: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBjfGVufDB8fDB8fHww'
            },
            {
                id: 6,
                name: 'Салат',
                price: 60,
                imageUrl: 'https://plus.unsplash.com/premium_photo-1681826395340-d34408303d6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbGFkfGVufDB8fDB8fHww'
            }
        ]

        return (
            <div className={styles.mainBody}>
                {products.map(product => (
                    <GoodsCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        )
    }
}
