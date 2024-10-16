import { createSlice } from '@reduxjs/toolkit';
import { getExpenses,createExpense,editExpense,removeExpense } from './expenseThunks'

// Slice 
const expensesSlice = createSlice({
  name: "expenses",
  initialState:{
    expensesData: [],
    status: "idle", // can be 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    fetchExpenses:(state,action)=>{
        console.log(action)
    }
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
        state.expensesData.push(action.payload);
      })
      .addCase(removeExpense.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const getExpensesData = (state) =>{ console.log("-------)))))))))))))))---------",state) 
      return state }
// export const getExpensesStatus = (state) => state.userExpenses.status;
// export const getExpensesError = (state) => state.userExpenses.error;

// export const postExpensesData = (state) => state.userExpenses.expenses;
// export const postExpensesStatus = (state) => state.userExpenses.status;
// export const postExpensesError = (state) => state.userExpenses.error;

// export const putExpensesData = (state) => state.userExpenses.expenses;
// export const putExpensesStatus = (state) => state.userExpenses.status;
// export const putExpensesError = (state) => state.userExpenses.error;

// export const deleteExpensesData = (state) => state.userExpenses.expenses;
// export const deleteExpensesStatus = (state) => state.userExpenses.status;
// export const deleteExpensesError = (state) => state.userExpenses.error;



export const {fetchExpenses} = expensesSlice.actions;
export default expensesSlice.reducer;