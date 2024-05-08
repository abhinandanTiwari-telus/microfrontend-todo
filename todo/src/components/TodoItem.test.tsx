import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

afterEach(cleanup);
describe("TodoItem component", () => {
  const todo = { id: 123132, title: "add todo", completed: true };
  const toggleTodoMock = jest.fn();
  const deleteTodoMock = jest.fn();

  it("should render todo item correctly", () => {
    const { getByText, getByRole } = render(
      <TodoItem
        todo={todo}
        toggleTodo={toggleTodoMock}
        deleteTodo={deleteTodoMock}
      />
    );

    const titleElement = getByText("add todo");
    expect(titleElement).toBeInTheDocument();

    const checkboxElement = getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();
    expect(checkboxElement).toHaveAttribute("checked");

    const deleteButtonElement = getByText("Delete");
    expect(deleteButtonElement).toBeInTheDocument();
  });

  it("should render a checkbox input", () => {
    const { getByRole } = render(
      <TodoItem
        todo={todo}
        toggleTodo={toggleTodoMock}
        deleteTodo={deleteTodoMock}
      />
    );

    const checkboxElement = getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();
  });

  it("should call toggleTodo when checkbox is clicked", () => {
    const { getByLabelText } = render(
      <TodoItem
        todo={todo}
        toggleTodo={toggleTodoMock}
        deleteTodo={deleteTodoMock}
      />
    );

    const checkboxElement = getByLabelText("add todo");
    fireEvent.click(checkboxElement);
    expect(toggleTodoMock).toHaveBeenCalledWith(123132, false);
  });

  it("should call deleteTodo when delete button is clicked", () => {
    const { getByText } = render(
      <TodoItem
        todo={todo}
        toggleTodo={toggleTodoMock}
        deleteTodo={deleteTodoMock}
      />
    );

    const deleteButtonElement = getByText("Delete");
    fireEvent.click(deleteButtonElement);

    expect(deleteTodoMock).toHaveBeenCalledWith(123132);
  });
});
