import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} from "../../services/expenseService";

export const getExpenses = createAsyncThunk("api/getExpense", async () => {
  try {
    const { data } = await fetchExpenses();
    console.log("Fetched Expenses:", JSON.stringify(data));
    return data;
  } catch (err) {
    console.error("Error fetching expenses:", err);
    throw new Error(err.response?.data?.message || "Failed to fetch expenses."); // Propagate error
  }
});

// Async thunk for creating an expense
export const createExpense = createAsyncThunk(
  "expenses/createExpense",
  async (expense) => {
    try {
      const response = await addExpense(expense);
      return response.data;
    } catch (err) {
      console.error("Error creating expense:", err);
      throw new Error(err.response?.data?.message || "Failed to create expense."); // Propagate error
    }
  }
);

// Async thunk for update an expense
export const editExpense = createAsyncThunk(
  "expenses/updateExpense",
  async ({ id, expense }) => {
    try {
      const response = await updateExpense(id, expense);;
      return response.data;
    } catch (err) {
      console.error("Error updating expense:", err);
      throw new Error(err.response?.data?.message || "Failed to update expense."); // Propagate error
    }
  }
);

// Async thunk for update an expense
export const removeExpense = createAsyncThunk(
  "expenses/deleteExpense",
  async ({ id }) => {
    try {
      const response = await deleteExpense(id);
      return response.data;
    } catch (err) {
      console.error("Error deleting expense:", err);
      throw new Error(err.response?.data?.message || "Failed to delete expense."); // Propagate error
    }
  }
);
