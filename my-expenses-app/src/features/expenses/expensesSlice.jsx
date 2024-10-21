import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchExpenses,addExpense,updateExpense,deleteExpense } from '../../services/expenseService';


export const getExpenses = createAsyncThunk('api/getExpenses',async ()=>{
  try {
      const {data} = await fetchExpenses();
      console.log("JSON Stringfy",JSON.stringify(data));
      return data
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
  "expenses/editExpense",
  async (data) => {
    const {id,category,amount,title} = data;
    try {
      const response = await updateExpense(id,{category,amount,title});
      return response.data
    } catch (err) {
      console.error(err);
    }
  }
);

// Async thunk for update an expense
export const removeExpense = createAsyncThunk(
  "expenses/removeExpense",
  async ({ id }) => {
    try {
      const response = await deleteExpense(id);
      if(response)
      {
        return id;
      }
      
    } catch (err) {
      console.error(err);
    }
  }
);

// Slice 
const expensesSlice = createSlice({
  name: "expenses",
  initialState:{
    expensesData: [],
    status: "idle", // can be 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    updateData:[],
    updateStatus:'pending',
    updateError:null,
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
            state.status = 'pending';
        })
        .addCase(getExpenses.fulfilled,(state,action) =>{
            state.status = 'succeeded';
            state.expensesData = action.payload;
        })
        .addCase(getExpenses.rejected,(state,action) =>{
            state.status = 'failed';
            state.error = action.error.message;
        })

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
        state.expensesData.push(action.payload);
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