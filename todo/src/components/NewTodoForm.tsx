import React, { useState } from "react";
import FilterTodos from "./FilterTodos";

const NewTodoForm = ({ onSubmit, filterHandler, filter }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
      <FilterTodos filterHandler={filterHandler} filter={filter} />
    </form>
  );
};

export default NewTodoForm;
