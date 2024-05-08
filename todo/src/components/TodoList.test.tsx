import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";
import TodoList from "./TodoList";

afterEach(cleanup);
test("renders todo items correctly", () => {
  const todos = [
    { id: 1234, title: "add todo", completed: true },
    { id: 5678, title: "another todo", completed: false },
  ];
  const toggleTodoMock = jest.fn();
  const deleteTodoMock = jest.fn();

  const { getByText, getAllByRole } = render(
    <TodoList
      todos={todos}
      toggleTodo={toggleTodoMock}
      deleteTodo={deleteTodoMock}
    />
  );

  const todoItems = getAllByRole("listitem");

  expect(todoItems).toHaveLength(2);

  //todo item is rendered correctly
  todos.forEach((todo) => {
    const todoItem = getByText(todo.title);
    expect(todoItem).toBeInTheDocument();
  });
});
