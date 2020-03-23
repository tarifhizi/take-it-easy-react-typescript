import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./app.component";

afterEach(cleanup);

it("should take a snapshot", () => {
  const wrap = render(<App />);
  expect(wrap.asFragment()).toMatchSnapshot();
});
