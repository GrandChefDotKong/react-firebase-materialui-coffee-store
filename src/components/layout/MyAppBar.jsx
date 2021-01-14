import React, { useState, useEffect, lazy, Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Modal, Button, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Login from '../Login/Login';
import Logout from '../Login/Logout';

const Cart = lazy(() => import('../Cart/Cart'));
const renderLoader = () => <p>Loading</p>;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#84562F',
  },
  title: {
    flexGrow: 1,
    color: '#84562F',
  },
  appbar: {
    background: '#D99B3C',
  },
  modal: {
    height: '100vh',
    width: '100vw',
  },
}));


export default function MyAppBar(props) {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [numberItems, setNumberItems] = useState(0);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    var totalItems = 0;
    props.cart.forEach((item) => totalItems += item.quantity);
    setNumberItems(totalItems);
  }, [props.cart])

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            The <span style={{ fontWeight:'bold' }}>COFFEE</span><span style={{ fontWeight:'bold', color:'#30312D' }}>SHOP</span>
          </Typography>
          <Button onClick={handleOpen}>
          <Badge badgeContent={numberItems} color="primary"><ShoppingCartIcon /></Badge>
          </Button>
          { props.user ? <Logout setUser={props.setUser} />
            : <Login setUser={props.setUser} />
          }
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            className={classes.modal}
          >
            <Suspense fallback={renderLoader()}>
              <Cart user={props.user} setUser={props.setUser} cart={props.cart} setCart={props.setCart} />
            </Suspense>
          </Modal>
        </Toolbar>
      </AppBar>
    </div>
  );
}