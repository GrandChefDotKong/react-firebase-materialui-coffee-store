import React from 'react';
import { Button, ListItem, ListItemText, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    media: {
        height: 50,
        width: 50,
        marginRight: 10,
    },
}));

const CartItem = ({ item, cart, setCart }) => {
    const classes = useStyles();

    const handleDelete = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    }

    return (
        <>
            <ListItem>
                <img className={classes.media} src="/assets/coffee-bag.png" alt=""/>
                <ListItemText style={{marginRight: 10, width: '45%' }}>{item.name}</ListItemText>
                <ListItemText style={{marginRight: 20 }}>¥{item.price}</ListItemText>
                <ListItemText style={{marginRight: 10 }}>{item.quantity}</ListItemText>
                <Button onClick={() => handleDelete(item.id)} color="primary"><DeleteIcon /></Button>
            </ListItem>
            <Divider />
        </>
    )
}

export default CartItem
