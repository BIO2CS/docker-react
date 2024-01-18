import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn frontend and backend/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn fullstack link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Frontend and Backend/i);
  expect(linkElement).toBeInTheDocument();
});
