// node modules
import React, { useEffect, useState } from "react";
import { Router, Switch, Route } from "react-router-dom";

// components
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import Product from "./Product";

// misc
import history from "../history";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  // fetch products array from api -> set state
  const fetchData = async () => {
    try {
      const productsResponse = await axios.get("http://localhost:5000/");
      setProducts(productsResponse.data.products);
    } catch (error) {
      setError(error.message);
    }
  };

  // on App mount call fetchData
  useEffect(() => {
    fetchData();
  }, []);

  // if no products
  if (products.length === 0 && error.length === 0) {
    return <div data-testid="App">Loading...</div>;
  }

  // if fetching data from api results in an error
  if (error.length !== 0) {
    return <div data-testid="App">{error}</div>;
  }

  return (
    <div data-testid="App" className="container mt-2">
      <h1 data-testid="Title">Shopping website</h1>
      <Router history={history}>
        <Switch>
          <Route path="/categories/:category/products/:pid">
            <Product products={products} />
          </Route>
          <Route path="/categories/:category">
            <ProductList products={products} />
          </Route>
          <Route path="/">
            <CategoryList products={products} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
