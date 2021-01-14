import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import handleBuyNow from '../../../config/handleBuyNow';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 545,
      marginBottom: '10px',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    price: {
      textAlign: 'right',
    },
    actionButton: {
      backgroundColor: '#D99B3C',
    }
}));

const ShopItem = ({ product, setCart, cart, handlePayment }) => {
    const classes = useStyles();
    const quantity = '200g'; 

    const imagePath = `/assets/${product.name.replace(/\s/g, '-').toLowerCase()}.webp`;

    const addToCart = (product) => {

      const itemPresent = cart.find((item) => item.id === product.id);
      if(itemPresent) {
        const newCart = cart.filter((item) => item.id !== product.id);
        newCart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: itemPresent.quantity+1,
        });
        setCart(newCart);
      } else {

        const item = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        };

        setCart([...cart, item]);
      }
    }

    return (
        <Card className={classes.root}>
            <CardHeader title={product.name} />
            <CardMedia
                className={classes.media}
                image={imagePath}
                title="Coffee Bag"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                </Typography>
                <Typography className={classes.price} variant="h5" color="textSecondary" component="p">
                  ¥{product.price} ({quantity})
                </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => addToCart(product)} size="small" className={classes.actionButton}>
                Add to Cart
              </Button>
              <Button onClick={() => handleBuyNow(product.name, product.price)} size="small" className={classes.actionButton}>
                Buy Now
              </Button>
            </CardActions>
        </Card>
    )
}

export default ShopItem
