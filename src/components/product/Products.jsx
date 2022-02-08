import React  from 'react';


import {Grid} from '@material-ui/core';

import Product from './Product';

// const products = [
//     { id: 1, name: 'Shoes', description: 'Nike AirForce 1', price: '$100' , image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'},
//     { id: 2, name: 'Shoes', description: 'Nike AirForce 1', price: '$200' , image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80'},
//     { id: 3, name: 'Shoes', description: 'Nike AirForce 1', price: '$300' , image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80'},
//     { id: 4, name: 'Shoes', description: 'Nike AirForce 1', price: '$150' , image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80'},
// ];

const Products = ({products, onAddToCart}) => {
    return (

        <main>
            <Grid container justifyContent="center" spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))}
            </Grid>
        </main>
    );
}

export default Products;