import React from "react";
import classes from "./Checkout.module.scss";
import { useSelector } from "react-redux";  
import { useRouter } from "next/router"; 
import {
  numberOfItems,
  totalPrice as price,
} from "../../redux/slices/cart-slice";
import Currency from "react-currency-formatter"; 
import {useSession} from 'next-auth/react' ; 

function Checkout() {
  const itemsCount = useSelector(numberOfItems);
  const totalPrice = useSelector(price);
  const { data: session, status } = useSession();
  const router = useRouter() ; 
  return (
    <div className={classes.checkout}>
      <p>
        Number Of Items : <span>{itemsCount}</span>{" "}
      </p>
      <p>
        Total Price :
        <span>
          &nbsp;
          <Currency quantity={totalPrice} />
        </span>
      </p>
      {session &&  <button onClick={()=> router.push('/')}> Continue Shopping </button> }
      <button disabled={!session? true : false}> {!session ? 'Signin to checkout' : 'Checkout'} </button>
    </div>
  );
}

export default Checkout;
