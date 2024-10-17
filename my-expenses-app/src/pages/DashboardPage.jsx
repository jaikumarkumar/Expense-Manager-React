import { PieChart, Pie, Tooltip, Cell,BarChart, Bar, XAxis, YAxis,  CartesianGrid } from 'recharts';

const ExpensesChart = ({ expenses }) => {
  return (
      <BarChart width={600} height={300} data={expenses}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
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
        nameKey="month"
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
  const expenses = [
    { month: 'January', amount: 500 },
    { month: 'February', amount: 300 },
    { month: 'March', amount: 450 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
    return(
      <>
      <h1>Dashboard</h1>
      <div className="flex">
      <h1>Monthly Expenses</h1>
      <ExpensesChart expenses={expenses}/>
      <h1>Monthly Expenses</h1>
      <ExpensesPieChart  expenses={expenses} colors={COLORS}/>
      </div>
      </>
    )
  };

  
  
  export default Dashboard;