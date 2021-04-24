import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";

import Product from "../components/Product";
import { dummyData } from "./dummyData";
import history from "../history";

// render error on bad url
it("renders error on bad url", () => {
  history.push("/categories/undefined/products/undefined");
  render(
    <Router history={history}>
      <Product products={dummyData} />
    </Router>
  );

  expect(screen.getByText(/Product not found/i)).toBeInTheDocument();
});
