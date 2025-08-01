// src/App.test.js
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders login page by default", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const loginText = screen.getByText(/login/i);
  expect(loginText).toBeInTheDocument();
});
