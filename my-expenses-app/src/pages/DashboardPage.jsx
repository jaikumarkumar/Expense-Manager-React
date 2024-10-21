import { PieChart, Pie, Tooltip, Cell,BarChart, Bar, XAxis, YAxis,  CartesianGrid } from 'recharts';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getExpenses } from '../features/expenses/expensesSlice';

const ExpensesChart = ({ expenses }) => {
  return (
      <BarChart width={600} height={300} data={expenses}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
  );
};

const ExpensesPieChart = ({expenses,colors}) => {



  return (
    <PieChart width={400} height={400}>
      <Pie
        data={expenses}
        dataKey="amount"
        nameKey="category"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {expenses.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

const Dashboard = () => {
  const {expensesData} = useSelector((state)=> state.expensesReducer);
  const dispatch= useDispatch();
  useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch]);

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
    return(
      <>
      <h1>Dashboard</h1>
      <div className="flex">
      <h1>Monthly Expenses</h1>
      <ExpensesChart expenses={expensesData}/>
      <h1>Monthly Expenses</h1>
      <ExpensesPieChart  expenses={expensesData} colors={COLORS}/>
      </div>
      </>
    )
  };

  
  
  export default Dashboard;