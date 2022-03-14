import React, { useState } from "react";
import classes from "./Row.module.scss";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";
import { ChevronUpIcon, ChevronDownIcon, XIcon } from "@heroicons/react/solid";
import Tooltip from "@mui/material/Tooltip";
import Currency from "react-currency-formatter";
import { addItem , removeItem } from "../../redux/slices/cart-slice";
import { useDispatch } from "react-redux";

function Row({ item }) {
  const dispatch = useDispatch();

  return (
    <TableRow
      key={item.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Image src={item.image} width={120} height={100} objectFit="contain" />
      </TableCell>
      <TableCell align="left">{item.title}</TableCell>
      <TableCell align="left">
        {/* buttons */}

        <div className={classes.quantity}>
          <input
            type="number"
            name="quantity"
            value={item.quantity}
            onBlur={(e) =>
              e.target.value === "" ? (e.target.value = 1) : e.target.value
            }
            onChange={(e) => {
              dispatch(
                addItem({
                  ...item,
                  quantity: Number(e.target.value),
                  cart: true,
                })
              );
            }}
          />
          <div>
            <ChevronUpIcon
              onClick={() => {
                dispatch(
                  addItem({
                    ...item,
                    quantity: item.quantity + 1,
                    cart: true,
                  })
                );
              }}
            />
            <ChevronDownIcon
              onClick={() => {
                dispatch(
                  addItem({
                    ...item,
                    quantity: item.quantity - 1,
                    cart: true,
                  })
                );
              }}
            />
          </div>

          <Tooltip title="Remove" placement="top" arrow>
            <button className={classes.smallBtn} onClick={()=> {  
              dispatch(removeItem({id: item.id}) ) 
            }}>
              <XIcon />
            </button>
          </Tooltip>
        </div>
        {/* ------------- */}
      </TableCell>
      <TableCell align="left">
        <Currency quantity={item.price} />
      </TableCell>
      <TableCell align="left">
        <Currency quantity={item.totalPrice} />{" "}
      </TableCell>
    </TableRow>
  );
}

export default Row;
