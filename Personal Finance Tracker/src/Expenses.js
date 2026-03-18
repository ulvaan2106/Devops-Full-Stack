import { useState } from 'react';

function Expenses({ expenses, onAddExpense, onRemoveExpense }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && description) {
      onAddExpense(amount, description);
      setAmount('');
      setDescription('');
    }
  };

  return (
    <div className="section expense-section">
      <h2>➖ Add Expense</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          min="0"
          className="input"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
        />
        <button type="submit" className="btn btn-primary">Add Expense</button>
      </form>
      <div className="items-list">
        {expenses.map((expense) => (
          <div key={expense.id} className="item expense-item">
            <div className="item-details">
              <div className="item-description">{expense.description}</div>
              <div className="item-amount">${expense.amount.toFixed(2)}</div>
            </div>
            <button
              className="btn btn-small btn-danger"
              onClick={() => onRemoveExpense(expense.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expenses;
