import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

afterEach(cleanup);
describe("NewTodoForm component", () => {
  it("should call onSubmit with new item and clear input on form submission", () => {
    // Mock functions
    const onSubmitMock = jest.fn();
    const filterHandlerMock = jest.fn();

    const { getByLabelText, getByText } = render(
      <NewTodoForm
        onSubmit={onSubmitMock}
        filterHandler={filterHandlerMock}
        filter="all"
      />
    );

    const input = getByLabelText("New Item");
    const addButton = getByText("Add");
    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(addButton);
    expect(onSubmitMock).toHaveBeenCalledWith("Test Todo");
    //after input submit
    expect(input).toHaveValue("");
  });
});
