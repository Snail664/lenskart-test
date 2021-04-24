import React from "react";
import "@testing-library/jest-dom/extend-expect";
import ShallowRenderer from "react-test-renderer/shallow";
import { Router } from "react-router-dom";
import history from "../history";

import Carousel from "../components/Carousel";
import dummyData from "./dummyData";

// carousel renders correctly
it("Matches snapshot for loaded props", () => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <Router history={history}>
      <Carousel products={dummyData} />
    </Router>
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
