import ExpenseForm from '../components/ExpenseForm';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getExpenses,
        changeStateTrue,
        changeStateFalse, } from '../features/expenses/expensesSlice';

const ExpensePage = () => {
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getExpenses());
      }, [dispatch]);
    const {expensesData,updateState} = useSelector((state) => state.expensesReducer);



    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Expense Tracker</h1>
            <ExpenseForm 
                expensesData = {expensesData}
                updateState={updateState}
                changeStateTrue={changeStateTrue}
                changeStateFalse={changeStateFalse}
            />
            
        </div>
        
    );
};

export default ExpensePage;