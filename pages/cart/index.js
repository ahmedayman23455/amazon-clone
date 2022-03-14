import React from "react";
import Checkout from "../../components/cart/Checkout";
import Items from "../../components/cart/Items";
import Header from "../../components/Header/Header";
import classes from "../../styles/pages-styles/cart/cart.module.scss";
import { numberOfItems as itemsCounter } from "../../redux/slices/cart-slice";  
import {useSelector} from 'react-redux' ; 

function Cart() {
  const numberOfItems = useSelector(itemsCounter);
  return (
    <>
      <Header />
      <main className={`container ${classes.cart}`}>
        {/* items */}
        <Items />
        {/* checkout */}
        {numberOfItems !== 0 && <Checkout />}
      </main>
    </>
  );
}

export default Cart;
