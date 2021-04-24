import React from "react";
import "@testing-library/jest-dom/extend-expect";
import ShallowRenderer from "react-test-renderer/shallow";
import { Router } from "react-router-dom";
import history from "../history";

import Header from "../components/Header";

// header renders correctly
it("Matches snapshot for loaded props", () => {
  const renderer = new ShallowRenderer();
  renderer.render(
    <Router history={history}>
      <Header prevPage="/test" />
    </Router>
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
