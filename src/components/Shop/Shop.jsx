import React from 'react';
import ShopItem from './ShopItem/ShopItem';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    shop: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '20px',
      backgroundColor: '#333333'
    },
  }));

const Shop = ({ products, setCart, cart }) => {

    const classes = useStyles();

    return (
        <Container className={classes.shop}>
            {products.map((product) => 
                <ShopItem key={product.id} handle cart={cart} setCart={setCart} product={product}/>
            )}
        </Container>
    )
}

export default Shop;
