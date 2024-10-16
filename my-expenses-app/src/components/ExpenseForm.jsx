// src/components/ExpenseForm.jsx
import { useState } from "react";
// import { useDispatch } from 'react-redux';
// import { addExpenses } from '../features/expenses/expensesSlice';
import { Input, Button, Typography } from "@material-tailwind/react";

const ExpenseForm = () => {
  
  // const dispatch = useDispatch();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addExpenses({ description, amount }));
    setDescription("");
    setAmount("");
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
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          label="Description"
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
      <Button type="submit" className="w-full">
        Add Expense
      </Button>
    </form>
    </div>
  );
};

export default ExpenseForm;
