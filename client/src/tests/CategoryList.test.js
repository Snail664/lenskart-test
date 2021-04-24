import React from "react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import { Router } from "react-router-dom";
import history from "../history";

import CategoryList from "../components/CategoryList";
import { dummyData } from "./dummyData";

// Category renders correctly
it("Matches snapshot for loaded data", () => {
  const tree = renderer
    .create(
      <Router history={history}>
        <CategoryList products={dummyData} />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
