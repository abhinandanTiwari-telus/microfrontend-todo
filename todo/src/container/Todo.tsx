import React, { useEffect, useState } from "react";
import NewTodoForm from "../components/NewTodoForm";
import TodoList from "../components/TodoList";
import { v4 as uuidv4 } from "uuid";
import "../styles.css";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });
  const [filter, setFilter] = useState("all");

  //Loading data from the localStorage
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    setTodos((currentTodos: Todo[]) => {
      return [...currentTodos, { id: uuidv4(), title, completed: false }];
    });
  };

  const toggleTodo = (id: number, completed: boolean) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  };

  const deleteTodo = (id: number) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filter === "all") {
      return true;
    }
    if (filter === "completed") {
      return todo.completed;
    }
    if (filter === "active") {
      return !todo.completed;
    }
    return true;
  });

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <NewTodoForm
        onSubmit={addTodo}
        filterHandler={handleFilter}
        filter={filter}
      />
      <h1 id="header" className="header">
        Todo List
      </h1>
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default Todo;
