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
  const [error, setError] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();
    try{
      if(!title || !category || !amount){
        throw new Error("All fields are required.");
      }
      await dispatch(createExpense({ title,category, amount })).unwrap();
      resetForm();
    }
    catch (err) {
      setError(err.message);
      console.error("Create Expense Error:", err);
  }
    
  };
  
  const updateExpenses = async () =>{

    try {
      if (!_id || !title || !category || !amount) {
          throw new Error("All fields are required.");
      }
      await dispatch(editExpense({ id: _id, category, amount, title })).unwrap();
      dispatch(changeStateFalse());
      resetForm();
  } catch (err) {
      setError(err.message);
      console.error("Update Expense Error:", err);
  }
  }

  const editExpensesForm = (expensesData) => {
    setId(expensesData._id)
    setCategory(expensesData.category)
    setTitle(expensesData.title)
    setAmount(expensesData.amount)
    dispatch(changeStateTrue());
  };

  const deleteExpenses = async (_id) => {
      try {
        await dispatch(removeExpense({ id: _id })).unwrap();
    } catch (err) {
        console.error("Delete Expense Error:", err);
        setError("Failed to delete the expense.");
    }
  };

  const resetForm = () => {
    setId("");
    setCategory("");
    setAmount("");
    setTitle("");
    setError(null); // Reset error state
};

  return (
    <>
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-10">
      <Typography variant="h5" className="mb-4 text-center">
        {updateState ? "Update Expense" : "Add Expense"}
      </Typography>
      {error && <Typography className="text-red-500 text-center mb-4">{error}</Typography>}
      
      <form>
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
      <Button onClick={(e) => updateState ? updateExpenses(e) : handleClick(e)} className="w-full">
                        {updateState ? "Update Expense" : "Add Expense"}
                    </Button>
      </form>
    </div>
    <ExpenseList 
                expensesData={expensesData} 
                onEdit={editExpensesForm}
                ondelete={deleteExpenses}
            />
    </>
  );
};

export default ExpenseForm;
