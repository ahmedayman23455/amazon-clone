import React, { useEffect, useState, useRef } from "react";
import classes from "./Product.module.scss";
import Currency from "react-currency-formatter";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/slices/cart-slice";
import { Notification } from "../../components/notification/Notification";
import { toast } from "react-toastify";
import { useSnackbar } from "notistack";
const MIN_RATING = 1;
const MAX_RATING = 5;
/* ---------------------------------- */

function Product(props) {
  const { id, title, description, category, image, price } = props;
  const [rating, setRating] = useState(5);
  const [hasPrime, setHasPrime] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const dispatch = useDispatch();

  /* ---------------------------------- */
  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setHasPrime(Math.random() < 0.5);
  }, [MAX_RATING, MIN_RATING]);

  useEffect(() => {
    AOS.init();
    AOS.init({
      delay: 280,
      duration: 1200,
      once: true,
    });
  }, []);

  /* ---------------------------------- */
  const message = "Your notification here";

  const handleClick = () => {
    enqueueSnackbar(`${title} added` , {
      variant: "success"
    });
  };

  return (
    <div
      className={classes.product}
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      {/* category */}
      <p className={classes.category}>{category}</p>

      <Image src={image} width={200} height={200} objectFit="contain" />
      {/* title  */}
      <h3>{title}</h3>

      {/* rate */}
      <div className={classes.rating}>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <span key={i}>
              <StarIcon />
            </span>
          ))}
      </div>

      {/* description */}
      <p className={classes.description}>{description}</p>

      {/* price */}
      <p className={classes.price}>
        <Currency quantity={price} />
      </p>

      {/* prime */}
      {hasPrime && (
        <div className={classes.primeIcon}>
          <img src="/prime.png" alt="prime" />
        </div>
      )}

      {/* quantity   */}
      <div className={classes.quantity}>
        <input
          type="number"
          name="quantity"
          value={quantity}
          min="1"
          onChange={(e) => {
            setQuantity(Number(e.target.value));
          }}
        />
        <div>
          <ChevronUpIcon
            onClick={() => setQuantity((prevState) => prevState + 1)}
          />
          <ChevronDownIcon
            onClick={() =>
              setQuantity((prevState) =>
                prevState - 1 === 0 ? 1 : prevState - 1
              )
            }
          />
        </div>
        <button
          className={classes.smallBtn}
          onClick={() => {
            dispatch(
              addItem({
                id: id,
                title: title,
                description: description,
                category: category,
                image: image,
                price: price,
                quantity: quantity === 0 ? 1 : quantity,
              })
            );
          }}
        >
          <ShoppingCartIcon />
        </button>
        <button
          className={classes.largeBtn}
          onClick={() => {
            handleClick();
            toast("Default Notification !");
            dispatch(
              addItem({
                id: id,
                title: title,
                description: description,
                category: category,
                image: image,
                price: price,
                quantity: quantity === 0 ? 1 : quantity,
              })
            );
          }}
        >
          Add To cart
        </button>
      </div>
    </div>
  );
}

export default Product;
