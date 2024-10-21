import ExpenseForm from "../components/ExpenseForm";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getExpenses,
  changeStateTrue,
  changeStateFalse,
} from "../features/expenses/expensesSlice";

const ExpensePage = () => {
  const dispatch = useDispatch();
  const { expensesData, updateState } = useSelector(
    (state) => state.expensesReducer
  );

  useEffect(() => {
    const fetchExpenses = async () => {
    try {
      await dispatch(getExpenses()).unwrap();
    } catch (err) {
        console.error("Error:", err.message);
    }
  };

  fetchExpenses();
  }, [dispatch]);


  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Expense Tracker</h1>
      <ExpenseForm
        expensesData={expensesData}
        updateState={updateState}
        changeStateTrue={() => dispatch(changeStateTrue())}
        changeStateFalse={() => dispatch(changeStateFalse())}
      />
    </div>
  );
};

export default ExpensePage;
