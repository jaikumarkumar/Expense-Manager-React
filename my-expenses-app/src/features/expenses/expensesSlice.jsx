import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchExpenses,
  addExpense,
  updateExpense,
  deleteExpense,
} from "../../services/expenseService";

export const getExpenses = createAsyncThunk("api/getExpenses", async () => {
  try {
    const data = await fetchExpenses();
    console.log("Fetched Expenses:", JSON.stringify(data));
    return data;
  } catch (err) {
    console.error("Error fetching expenses:", err);
    throw new Error(err.message); 
  }
});

// Async thunk for creating an expense
export const createExpense = createAsyncThunk(
  "expenses/createExpense",
  async (expense) => {
    try {
      const data = await addExpense(expense);
      return data;
    } catch (err) {
      console.error("Error creating expense:", err);
      throw new Error(err.message); // Propagate the error
    }
  }
);

// Async thunk for update an expense
export const editExpense = createAsyncThunk(
  "expenses/editExpense",
  async (data) => {
    const { id, category, amount, title } = data;
    try {
      const data = await updateExpense(id, { category, amount, title });
      return data;
    } catch (err) {
      console.error("Error editing expense:", err);
      throw new Error(err.message); // Propagate the error
    }
  }
);

// Async thunk for update an expense
export const removeExpense = createAsyncThunk(
  "expenses/removeExpense",
  async ({ id }) => {
    try {
      const data = await deleteExpense(id);
      if (data) {
        return id;
      }
    } catch (err) {
      console.error("Error removing expense:", err);
      throw new Error(err.message); // Propagate the error
    }
  }
);

// Slice
const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expensesData: [],
    status: "idle", // can be 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    updateData: [],
    updateStatus: "pending",
    updateError: null,
    updateState: false,
  },
  reducers: {
    changeStateTrue: (state) => {
      state.updateState = true;
    },
    changeStateFalse: (state) => {
      state.updateState = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExpenses.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getExpenses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.expensesData = action.payload;
      })
      .addCase(getExpenses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(createExpense.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createExpense.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.expensesData.push(action.payload);
      })
      .addCase(createExpense.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(editExpense.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editExpense.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.expensesData.findIndex(exp => exp._id === action.payload._id);
        if (index >= 0) {
          state.expensesData[index] = action.payload; // Update existing expense
        }
      })
      .addCase(editExpense.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(removeExpense.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeExpense.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.expensesData = state.expensesData.filter(
          (expensesData) => expensesData._id !== action.payload
        );
      })
      .addCase(removeExpense.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { changeStateTrue, changeStateFalse } = expensesSlice.actions;

export default expensesSlice.reducer;
