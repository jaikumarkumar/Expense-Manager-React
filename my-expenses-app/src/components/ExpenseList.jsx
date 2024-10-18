import { Button } from "@material-tailwind/react";
import '../styles/expenses.style.css'


const ExpenseTable = ({expensesData,onEdit,ondelete}) => {
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
          {expensesData ? (
            expensesData.map((expensesData, index) => (
                <tr key={index}>
                <td>{expensesData.title}</td>
                <td>{expensesData.category}</td>
                <td>{expensesData.amount}</td>
                <td>{expensesData.date}</td>
                <td>
                <Button
                onClick={() => onEdit(expensesData)}
                >Edit
                </Button>
                </td>
                <td>
                <Button 
                onClick={() => ondelete(expensesData._id)}
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