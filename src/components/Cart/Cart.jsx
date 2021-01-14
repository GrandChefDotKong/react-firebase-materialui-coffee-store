import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, List, Container } from '@material-ui/core';
import handleChekout from '../../config/handleCheckout';
import CartItem from './CartItem/CartItem';
import Login from '../Login/Login';

const useStyles = makeStyles((theme) => ({
    cart: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    checkoutButton: {
        marginTop: 10,
        marginBottom: 20
    }
}));

const Cart = ({ cart, setCart, user, setUser }) => {
    const classes = useStyles();

    const handleClick = () => {
        handleChekout(cart);
    }

    return (
        <Container className={classes.cart}>
            <Typography variant="h3">Shopping Cart</Typography>
            <List style={{ width: '90vw' }}>
                {cart.length > 0 ? cart.map((item) => 
                    <CartItem key={item.id} item={item} cart={cart} setCart={setCart} />
                ) : <Typography variant="h4">Your cart is empty !</Typography>}
            </List>
            <Typography variant="body2">Shipping free for order over 3000 yen.</Typography>
            {!user ?
            <>  
                <Typography style={{marginBottom: "20px"}} variant="body2">Please log in to continue</Typography>   
                <Login user={user} setUser={setUser} />
                <div style={{marginBottom: "20px"}}></div>
            </>
            :   <Button disabled={cart.length===0} onClick={handleClick} variant="contained" color="primary" className={classes.checkoutButton}>Check out</Button>
            }
        </Container>
    )
}

export default Cart;
