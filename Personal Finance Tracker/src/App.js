import { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Expenses from './Expenses';
import Income from './Income';

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addIncome = (amount, description) => {
    setIncomes([...incomes, { id: Date.now(), amount: parseFloat(amount), description }]);
  };

  const removeIncome = (id) => {
    setIncomes(incomes.filter(income => income.id !== id));
  };

  const addExpense = (amount, description) => {
    setExpenses([...expenses, { id: Date.now(), amount: parseFloat(amount), description }]);
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const totalIncome = incomes.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  const balance = totalIncome - totalExpenses;

  return (
    <div className="App">
      <h1 className="app-title">💰 Personal Finance Tracker</h1>
      <Dashboard totalIncome={totalIncome} totalExpenses={totalExpenses} balance={balance} />
      <div className="components-container">
        <Income incomes={incomes} onAddIncome={addIncome} onRemoveIncome={removeIncome} />
        <Expenses expenses={expenses} onAddExpense={addExpense} onRemoveExpense={removeExpense} />
      </div>
    </div>
  );
}

export default App;
