import { useState } from 'react';

function Income({ incomes, onAddIncome, onRemoveIncome }) {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && description) {
      onAddIncome(amount, description);
      setAmount('');
      setDescription('');
    }
  };

  return (
    <div className="section income-section">
      <h2>➕ Add Income</h2>
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
        <button type="submit" className="btn btn-primary">Add Income</button>
      </form>
      <div className="items-list">
        {incomes.map((income) => (
          <div key={income.id} className="item income-item">
            <div className="item-details">
              <div className="item-description">{income.description}</div>
              <div className="item-amount">${income.amount.toFixed(2)}</div>
            </div>
            <button
              className="btn btn-small btn-danger"
              onClick={() => onRemoveIncome(income.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Income;
