import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

function Expenses() {
  return <h1>Expenses</h1>;
}

test("renders Expenses heading", () => {
  render(<Expenses />);
  expect(screen.getByText(/Expenses/i)).toBeInTheDocument();
});