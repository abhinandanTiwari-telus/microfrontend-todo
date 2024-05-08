import React from "react";
const FilterTodos = ({ filterHandler, filter }) => {
  return (
    <select value={filter} onChange={(e) => filterHandler(e)}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="active">Active</option>
    </select>
  );
};

export default FilterTodos;
