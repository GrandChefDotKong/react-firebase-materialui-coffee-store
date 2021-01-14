import React, { useState, useEffect, lazy, Suspense } from 'react';
import MyAppBar from './components/layout/MyAppBar';
import firebase from './config/firebase';
import { CircularProgress, Typography } from '@material-ui/core';
import './styles.css';

const Shop = lazy(() => import('./components/Shop/Shop'));
const renderLoader = () => <p>Loading ...</p>;

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    firebase.firestore().collection('products').onSnapshot((snapshot) => {

      const productArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          price: doc.data().price,
          description: doc.data().description, }));

      setProducts(productArray);

    });
  }, [])

  return (
    <>
      <MyAppBar cart={cart} setCart={setCart} user={user} setUser={setUser}  />
      <Typography style={{ paddingTop: 70, paddingBottom: 10, color: 'white', backgroundColor: '#84562F', textAlign: 'center', }}>Welcome { user ? user.name : 'visitor' }</Typography>
      {products ? <Suspense fallback={renderLoader()}><Shop cart ={cart} setCart={setCart} products={products} /></Suspense> 
      : <CircularProgress style={{ position:'absolute', left:'40%', top:'20%' }} />}
      <Typography style={{ backgroundColor: '#84562F', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Made by&nbsp;<a href="https://www.linkedin.com/in/adrien-gautier-pauchet"><img style={ {width: 40, height: 40 }} src="/assets/linkedin.svg" alt="linkedin logo" /></a>
        &nbsp;with&nbsp;<a href="https://reactjs.org/"><img style={ {width: 40, height: 40 }} src="/assets/reactjs.svg" alt="reactjs logo" /></a>
        &nbsp;and&nbsp;<a href="https://material-ui.com/"><img style={ {width: 40, height: 40 }} src="/assets/materialui.svg" alt="materialui logo" /></a>
      </Typography>
    </>
  );
}

export default App;
