import React from "react";
import { render, cleanup, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";

import App from "../components/App";
import { dummyData } from "./dummyData";
import history from "../history";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(
  // cleanup on exiting
  cleanup
);

// successful fetch data
it("fetches the data and renders children correctly", async () => {
  const mockApi = axiosMock.get.mockResolvedValueOnce({
    data: { products: dummyData },
  });

  const app = render(<App />);

  await waitFor(() => {
    return expect(mockApi).toHaveBeenCalledTimes(1);
  });

  expect(app.getByTestId("App")).toContainElement(app.getByTestId("Title"));
});

// loading state while fetching data
it("it sets loading state correctly", async () => {
  const mockApi = axiosMock.get.mockResolvedValueOnce({
    data: { products: [] },
  });

  const app = render(<App />);

  await waitFor(() => {
    return expect(mockApi).toHaveBeenCalledTimes(1);
  });

  expect(app.getByTestId("App")).toHaveTextContent("Loading...");
});

// errror state test
it("it sets error state correctly", async () => {
  const mockApi = axiosMock.get.mockResolvedValueOnce(
    Promise.reject({ message: "Network Error" })
  );

  const app = render(<App />);

  await waitFor(() => {
    return expect(mockApi).toHaveBeenCalledTimes(1);
  });

  expect(app.getByTestId("App")).toHaveTextContent("Network Error");
});

// navigation
it("full app rendering/navigating", async () => {
  const mockApi = axiosMock.get.mockResolvedValueOnce({
    data: { products: dummyData },
  });

  const app = render(<App />);

  await waitFor(() => {
    return expect(mockApi).toHaveBeenCalledTimes(1);
  });

  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByText(/Shopping website/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/spectacles/i));

  // check that the content changed to the new page
  expect(screen.getByText(/spectacles/i)).toBeInTheDocument();
});
