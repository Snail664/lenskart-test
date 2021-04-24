// node modules
import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import Header from "./Header";

const ProductList = ({ products }) => {
  // get category from path
  const match = useRouteMatch("/categories/:category");
  const category = match.params.category;

  // filter products by category
  const productsInCategory = products.filter(
    (product) => product.category === category
  );

  // if not products found
  if (productsInCategory.length === 0) {
    return <div>Category not found!</div>;
  }

  // render products
  const renderProducts = productsInCategory.map((product) => {
    return (
      <div
        className="m-5 p-5 bg-light rounded box shadow-lg w-100 h-100"
        key={product.id}
      >
        <div>
          <Link to={`/categories/${category}/products/${product.id}`}>
            <h4 className="text-dark">{product.name}</h4>
          </Link>
        </div>
        <div className="text-muted">$ {product.price}</div>
      </div>
    );
  });

  return (
    <div className="text-center">
      <Header prevPage="/" />
      <h1>{category}</h1>
      <h4>Please select a product</h4>
      <div className="d-flex flex-wrap justify-content-center">
        {renderProducts}
      </div>
    </div>
  );
};

export default ProductList;
