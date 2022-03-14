import React from "react";
import classes from "./Items.module.scss";
import { useSelector } from "react-redux";
import { items } from "../../redux/slices/cart-slice";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import { numberOfItems as itemsCounter } from "../../redux/slices/cart-slice";
import Row from "./Row";
import {useRouter} from 'next/router'

/* ---------------------------------- */

function Items() {
  const AllItems = useSelector(items);
  const numberOfItems = useSelector(itemsCounter);
  const router = useRouter()  ; 
  return (
    <div className={classes.items}>
      <img src="/cart_cover.png" alt="" />

      <div className={classes.basket}>
        <h1>Shopping Cart</h1>
 

        {numberOfItems === 0 && (
          <div className={classes.empty__message}>
            <h3>Your shopping cart is empty!</h3>
            <button onClick={()=> router.push('/')}> Continue</button>
          </div>
        )}


        {numberOfItems !== 0 && (
          /* table */
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>IMAGE</TableCell>
                  <TableCell align="left">PRODUCT NAME </TableCell>
                  <TableCell align="left">QUANTITY</TableCell>
                  <TableCell align="left">UNIT PRICE </TableCell>
                  <TableCell align="left">TOTAL PRICE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {AllItems.map((item) => (
                  <Row key={item.id} item={item} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {/* ****************************************************************** */}
      </div>
    </div>
  );
}

export default Items;
