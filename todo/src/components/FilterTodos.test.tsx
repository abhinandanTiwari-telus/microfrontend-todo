import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup, fireEvent } from "@testing-library/react";
import FilterTodos from "./FilterTodos";

afterEach(cleanup);
describe("FilterTodos component", () => {
  //Mock functions
  const filterHandler = jest.fn();
  const filter = "all";
  it("should render the select element with options", () => {
    const { getByRole, getByText } = render(
      <FilterTodos filterHandler={filterHandler} filter={filter} />
    );

    const selectElement = getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const allOption = getByText("All");
    const completedOption = getByText("Completed");
    const activeOption = getByText("Active");
    expect(allOption).toBeInTheDocument();
    expect(completedOption).toBeInTheDocument();
    expect(activeOption).toBeInTheDocument();
  });

  it("should call filterHandler with the selected value", () => {
    const { getByRole } = render(
      <FilterTodos filterHandler={filterHandler} filter={filter} />
    );

    const selectElement = getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "completed" } });

    expect(filterHandler).toHaveBeenCalled();
  });
});
