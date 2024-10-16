import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getExpenses } from '../features/expenses/expenseThunks'
import { getExpensesData } from '../features/expenses/expensesSlice'


const ExpenseTable = () => {
  const expensesData = useSelector(getExpensesData);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getExpenses());}, [dispatch]);
  return (
    <div className="table-container">
      <table className="expense-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expensesData.expenses.expenses.expensesData && expensesData.expenses.expenses.expensesData.length > 0 ? (
            expensesData.expenses.expenses.expensesData.map((expense, index) => (
              <tr key={index}>
                <td>{expense.title}</td>
                <td>{expense.category}</td>
                <td>{expense.amount}</td>
                <td>{expense.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-data">
                No expenses available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
