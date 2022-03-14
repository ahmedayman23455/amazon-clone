import React, { useEffect, useState } from "react";

import classes from "./Notification.module.scss";
import Image from "next/image";
import {
  ShoppingCartIcon,
  ArrowRightIcon,
  XIcon,
} from "@heroicons/react/outline";

import { useRouter } from "next/router";

function Notification({ title, image, description  }) {
  const router = useRouter();

  return (
    <div className={classes.notification}>
      {/* details */}
      <div className={classes.details}>
        <Image src={image} height={200} width={200} objectFit="contain" />
        <div>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>

      {/* button */}
      <div className={classes.buttons}>
        <button>
          <span>
            <ShoppingCartIcon />
          </span>
          <span
            onClick={() => {
              router.push("/cart");
            }}
          >
            View Cart
          </span>
        </button>

        <button>
          <span
            onClick={() => {
              router.push("/");
            }}
          >
            {" "}
            Checkout{" "}
          </span>
          <span>
            <ArrowRightIcon />
          </span>
        </button>
      </div>

      {/* X icon */}
      <XIcon className={classes.xIcon} />
    </div>
  );
}

export default Notification;
