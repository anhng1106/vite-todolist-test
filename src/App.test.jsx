import App from "./App";
import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import TodoTable from "./TodoTable";

test("renders App component", () => {
  render(<App />);
  const header = screen.getByText(/My Todolist/i);
  expect(header).toBeInTheDocument();
});

test("renders todotable", () => {
  const row = [{ desc: "Go to coffee", date: "24.01.2023" }];
  render(<TodoTable todos={row} />);
  const table = screen.getByRole("table");
  expect(table).toHaveTextContent(/go to coffee/i);
});

test("add todo 1", () => {
  render(<App />);
  const desc = screen.getByPlaceholderText("Description");
  fireEvent.change(desc, { target: { value: "Go to coffee" } });
  const date = screen.getByPlaceholderText("Date");
  fireEvent.change(date, { target: { value: "29.01.2023" } });
  const button = screen.getByText("Add");
  fireEvent.click(button);
  const table = screen.getByRole("table");
  expect(table).toHaveTextContent(/go to coffee/i);
});

test("add todo 2", () => {
  render(<App />);
  const desc = screen.getByPlaceholderText("Description");
  fireEvent.change(desc, { target: { value: "Study" } });
  const date = screen.getByPlaceholderText("Date");
  fireEvent.change(date, { target: { value: "02.02.2023" } });
  const button = screen.getByText("Add");
  fireEvent.click(button);
  const table = screen.getByRole("table");
  expect(table).toHaveTextContent(/study/i);
});

test("delete all todos", () => {
  render(<App />);
  const desc = screen.getByPlaceholderText("Description");
  fireEvent.change(desc, { target: { value: "Go to market" } });
  const date = screen.getByPlaceholderText("Date");
  fireEvent.change(date, { target: { value: "23.03.2023" } });
  const buttonAdd = screen.getByText("Add");
  fireEvent.click(buttonAdd);
  const table = screen.getByRole("table");
  expect(table).toHaveTextContent(/Go to market/i);

  const button = screen.getByText("Delete All");
  fireEvent.click(button);
});
