import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchExpenses,addExpense,updateExpense,deleteExpense } from '../../services/expenseService';


export const getExpenses = createAsyncThunk('api/getExpense',async ()=>{
  try {
      const response = await fetchExpenses();
      return response.data
    } catch (err) {
      console.error(err);
    }
  }
)

// Async thunk for creating an expense
export const createExpense = createAsyncThunk(
  "expenses/createExpense",
  async (expense) => {
    try {
      const response = await addExpense(expense);
      return response.data
    } catch (err) {
      console.error(err);
    }
  }
);

// Async thunk for update an expense
export const editExpense = createAsyncThunk(
  "expenses/updateExpense",
  async ({ id, expense }) => {
    try {
      const response = await updateExpense({ id, expense });
      return response.data
    } catch (err) {
      console.error(err);
    }
  }
);

// Async thunk for update an expense
export const removeExpense = createAsyncThunk(
  "expenses/deleteExpense",
  async ({ id }) => {
    try {
      const response = await deleteExpense({ id });
      return response.data
    } catch (err) {
      console.error(err);
    }
  }
);