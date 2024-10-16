// src/pages/ExpensePage.jsx
// import { useState } from 'react';
// import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

const ExpensePage = () => {
    // const [expenses, setExpenses] = useState([{
    //     "_id": "6707ad9b293ae479bdd8c6a7",
    //     "user": "670376bee0cdda7698d056f7",
    //     "title": "Pongal Celebrations",
    //     "amount": 2500,
    //     "category": "Pooja Expenses",
    //     "date": "2024-10-09T00:00:00.000Z",
    //     "__v": 0
    // }]);
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
            {/* <ExpenseForm 
                onSubmit={editingExpense ? updateExpense : addExpense} 
                initialData={editingExpense} 
            /> */}
            <ExpenseList 
                // expenses={expenses} 
                // onDelete={deleteExpense} 
                // onEdit={startEditing} 
            />
        </div>
        
    );
};

export default ExpensePage;