// node modules
import React from "react";
import { useRouteMatch } from "react-router-dom";
import Carousel from "./Carousel";
import Header from "./Header";

const Product = ({ products }) => {
  // get product id from path
  const match = useRouteMatch("/categories/:category/products/:pid");
  const category = match.params.category;
  const pid = match.params.pid;

  var product = null;
  var otherProducts = [...products];
  // get product from products array and put the rest into otherProducts
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === parseInt(pid)) {
      product = products[i];
      otherProducts.splice(i, 1);
    }
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="d-flex align-items-center flex-column justify-content-center">
        <div>
          <Header prevPage={`/categories/${category}`} />
          <div className="mt-5 mb-5">
            <h1>{product.name}</h1>
            <img alt={product.name} className="w-100" src={product.url} />
            <h5 className="mt-5">Price: ${product.price}</h5>
            <h5>Category: {product.category}</h5>
          </div>
        </div>
      </div>
      <Carousel products={otherProducts} />
    </>
  );
};

export default Product;
