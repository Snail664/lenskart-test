import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";

import ProductList from "../components/ProductList";
import { dummyData } from "./dummyData";
import history from "../history";

// render error on bad url
it("render error on bad url", () => {
  history.push("/categories/undefined");
  render(
    <Router history={history}>
      <ProductList products={dummyData} />
    </Router>
  );

  expect(screen.getByText(/Category not found!/i)).toBeInTheDocument();
});
