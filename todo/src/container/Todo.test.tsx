import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

afterEach(cleanup);
describe("Todo component", () => {
  it("should render the Todo component", () => {
    const { getByText } = render(<Todo />);
    expect(getByText("Todo List")).toBeInTheDocument();
  });

  it("should add a new todo item", () => {
    const { getByLabelText, getByText } = render(<Todo />);
    const input = getByLabelText("New Item");
    const addButton = getByText("Add");

    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);

    expect(getByText("Test Todo")).toBeInTheDocument();
  });
});
