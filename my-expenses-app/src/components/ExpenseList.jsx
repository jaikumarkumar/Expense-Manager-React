import { Button } from "@material-tailwind/react";
import '../styles/expenses.style.css'


const ExpenseTable = ({expenses}) => {
  //   const expensesData = useSelector(getExpensesData);
      
  //   const dispatch = useDispatch(); 

  //   useEffect(() => { dispatch(getExpenses());}, [dispatch]);

  // const handleCreate = () => {
  //   dispatch(createExpense({ month: 'October', amount: 100 }));
  // };

  // const handleUpdate = (id) => {
  //   dispatch(editExpense({ id, updates: { amount: 200 } }));
  // };

  // const handleDelete = (id) => {
  //   dispatch(removeExpense(id));
  // };
  // console.log("++++++++++++++++++++++++++++++++++++++",expenses[9]);
  
  return (
    <div className="table-container">
      <table className="expense-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses ? (
            expenses.map((expenses, index) => (
                <tr key={index}>
                <td>{expenses.title}</td>
                <td>{expenses.category}</td>
                <td>{expenses.amount}</td>
                <td>{expenses.date}</td>
                <td>
                <Button
                // onClick={() => handleUpdate(expense._id)}
                >Edit
                </Button>
                </td>
                <td>
                <Button 
                // onClick={() => handleDelete(expense._id)}
                >Delete
                </Button>
                </td>
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
