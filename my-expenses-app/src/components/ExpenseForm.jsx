import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createExpense,editExpense,removeExpense } from '../features/expenses/expensesSlice';
import { Input, Button, Typography } from "@material-tailwind/react";
import ExpenseList from '../components/ExpenseList';

const ExpenseForm = ({expensesData,updateState,changeStateTrue,changeStateFalse}) => {
  
  const dispatch = useDispatch();
  const [_id, setId] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");

  console.log("input data", title,category, amount)

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(createExpense({ title,category, amount }));
    setCategory("");
    setAmount("");
    setTitle("");
  };
  
  const updateExpenses = ()=>{
    console.log("11111111111111111111111111",_id,category,amount,title)
    dispatch(editExpense({id:_id,category,amount,title}));
    dispatch(changeStateFalse());
    setId("");
    setCategory("");
    setAmount("");
    setTitle("");
  }

  const editExpensesForm = (expensesData) => {
    setId(expensesData._id)
    setCategory(expensesData.category)
    setTitle(expensesData.title)
    setAmount(expensesData.amount)
    dispatch(changeStateTrue());
  };

  const deleteExpenses = (_id) => {
    dispatch(removeExpense({id:_id}));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-10">
      <Typography variant="h5" className="mb-4 text-center">
        {"Add Expense"}
      </Typography>
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
        <Button onClick={(e) => { updateExpenses(e); }} className="w-full">
        Update Expense
      </Button>
      ):(
        <Button onClick={(e) => { handleClick(e); }} className="w-full">
        Add Expense
      </Button>
      )}
      <ExpenseList 
                expensesData={expensesData} 
                onEdit={editExpensesForm}
                ondelete={deleteExpenses}
            />
    </div>
  );
};

export default ExpenseForm;
