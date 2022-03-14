import React from "react";
import Product from "./Product";
import classes from "./Products.module.scss";

function Products({ products }) {
  return (
    <div className={classes.products}>
      {products
        .slice(0, 3)
        .map(({ id, title, description, category, image, price, rating }) => {
          return (
            <Product
              key={id}
              id={id}
              title={title}
              description={description}
              category={category}
              image={image}
              price={price}
              rating={rating.rate}
            ></Product>
          );
        })}

      <img src="/cover1.jpg" alt="" className={classes.cover} />

      {products
        .slice(4)
        .map(({ id, title, description, category, image, price, rating }) => {
          return (
            <Product
              key={id}
              id={id}
              title={title}
              description={description}
              category={category}
              image={image}
              price={price}
              rating={rating.rate}
            ></Product>
          );
        })}
    </div>
  );
}

export default Products;
