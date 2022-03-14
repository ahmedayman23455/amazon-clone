import React from "react";
import classes from "./Header.module.scss";
import Image from "next/image";
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import {useSelector} from 'react-redux';
import { numberOfItems} from '../../redux/slices/cart-slice' ;  
import {useRouter}  from 'next/router';  
import { signIn, signOut, useSession } from "next-auth/react";


function Header() {
  const numberItems = useSelector(numberOfItems) ;    
  const router = useRouter() ; 
  const { data: session, status } = useSession();

  
  return (
    <>
    {/*  top header */}
      <div className={classes.header}>
        {/* logo */}
        <div className={`${classes.logo}`} onClick={()=> router.push('/')}>
          <Image
            src="https://links.papareact.com/f90"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* search bar */}
        <div className={classes.searchbar}>
          <input type="text" placeholder="Search" />
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        </div>

        {/* Right */}
        <div className={classes.right}>
          <div onClick={signIn}>
            <p>{session?  `Hello, ${session.user.name}`: 'signin'}</p>
            <p>Accounts&Lists</p>
          </div>

          <div>
            <p>Return & Orders</p>
          </div>

          <div  onClick={()=> router.push('/cart')}>
            <div>
              <ShoppingCartIcon />
              <span>{numberItems}</span>
            </div>
            <p>Basket</p>
          </div>
        </div>
      </div>
{/* -------------------------------------------- */}
      {/*  bottom header */}
      <div className={classes.bottom_header}>
        <div>
          <MenuIcon />
         <span> All</span>
        </div>
        <ul>
          <li>Prime Video</li>
          <li>Amazon Business</li>
          <li> Today's Deals</li>
        </ul>
        <ul className={classes.more_items}>
          <li>Electronics</li>
          <li> Food & Grocery</li>
          <li> Prime</li>
          <li>Buy Again</li>
          <li> Shooper Toolkit</li>
          <li>Health & Personal Care</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
