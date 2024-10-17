import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createExpense,editExpense,removeExpense,updateState } from '../features/expenses/expensesSlice';
import { Input, Button, Typography } from "@material-tailwind/react";

const ExpenseForm = () => {
  
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");

  console.log("input data", title,category, amount)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createExpense({ title,category, amount }));
    setCategory("");
    setAmount("");
    setTitle("");
  };
  
  const editExpenses = (expensesValue)=>{
    setId(expensesValue.id)
    setCategory(expensesValue.value)
    setTitle(expensesValue.value)
    setAmount(expensesValue.value)
  }

  const updateForm = () => {
    dispatch(editExpense({ category: category, title: title,amount:amount }));
    dispatch(changeStateFalse());
    setId("");
    setCategory("");
    setAmount("");
    setTitle("");
  };

  const deleteEmployee = (id) => {
    dispatch(removeExpense(id));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-10">
      <Typography variant="h5" className="mb-4 text-center">
        {"Add Expense"}
      </Typography>
      <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          label="Title"
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="Enter category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          label="Category"
        />
      </div>
      <div>
        <Input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          label="Amount"
        />
      </div>
      {updateState ? (
        <Button type="submit" className="w-full">
        Update Expense
      </Button>
      ):(
        <Button type="submit" className="w-full">
        Add Expense
      </Button>
      )}
      
    </form>
    </div>
  );
};

export default ExpenseForm;
