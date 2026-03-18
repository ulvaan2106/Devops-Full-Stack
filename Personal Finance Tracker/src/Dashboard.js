function Dashboard({ totalIncome, totalExpenses, balance }) {
  return (
    <div className="dashboard">
      <div className="stat-card income-card">
        <div className="stat-label">💰 Total Income</div>
        <div className="stat-value">${totalIncome.toFixed(2)}</div>
      </div>
      <div className="stat-card expense-card">
        <div className="stat-label">💸 Total Expenses</div>
        <div className="stat-value">${totalExpenses.toFixed(2)}</div>
      </div>
      <div className={`stat-card balance-card ${balance >= 0 ? 'positive' : 'negative'}`}>
        <div className="stat-label">📊 Balance</div>
        <div className="stat-value">${balance.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default Dashboard;
