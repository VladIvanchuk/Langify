import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";

test("renders Welcome component with correct content", () => {
  render(
    <BrowserRouter>
      <Welcome />
    </BrowserRouter>
  );  

  const titleElement = screen.getByText(/Langify/i);
  expect(titleElement).toBeInTheDocument();
  const linkElement = screen.getByText(/Записатися/i);
  expect(linkElement).toBeInTheDocument();
});
