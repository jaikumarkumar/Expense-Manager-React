// src/pages/ExpensePage.jsx
// import { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getExpenses } from '../features/expenses/expensesSlice';

const ExpensePage = () => {
    
    const dispatch = useDispatch();
    const {expensesData} = useSelector((state) => state.expensesReducer);

    console.log("++++++++++++++++++++++++++++++++++++++",expensesData);

    useEffect(() => {
        dispatch(getExpenses());
      }, [dispatch]);

    //   console.log(JSON.stringify(expensesData));
    //   console.log(status);
    //   console.log(error);

    // const [editingExpense, setEditingExpense] = useState(null);

    // const addExpense = (expense) => {
    //     const newExpense = { ...expense, id: Date.now() };
    //     setExpenses([...expenses, newExpense]);
    // };

    // const updateExpense = (updatedExpense) => {
    //     setExpenses(expenses.map(exp => (exp.id === updatedExpense.id ? updatedExpense : exp)));
    //     setEditingExpense(null);
    // };

    // const deleteExpense = (id) => {
    //     setExpenses(expenses.filter(exp => exp.id !== id));
    // };

    // const startEditing = (expense) => {
    //     setEditingExpense(expense);
    // };

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Expense Tracker</h1>
            <ExpenseForm 
                // onSubmit={editingExpense ? updateExpense : addExpense} 
                // initialData={editingExpense} 
            />
            <ExpenseList 
                expenses={expensesData} 
                // onDelete={deleteExpense} 
                // onEdit={startEditing} 
            />
        </div>
        
    );
};

export default ExpensePage;