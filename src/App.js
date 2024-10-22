import React, { useState } from 'react';
import './ExpenseTracker.css';  // Assuming you've created a separate CSS file for styling

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const addExpenseHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Math.random().toString(),
      title,
      amount: +amount,
      date: new Date(date)
    };
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
    setTitle('');
    setAmount('');
    setDate('');
  };

  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="app">
      <h1>💸 Expense Tracker 💸</h1>

      {/* Add Expense Form */}
      <form onSubmit={addExpenseHandler} className="add-expense-form">
        <div>
          <label htmlFor="title">Expense Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">Add Expense</button>
      </form>

      {/* Expense List */}
      <div className="expenses">
        <h2>Your Expenses</h2>
        {expenses.length === 0 ? (
          <p>No expenses added yet.</p>
        ) : (
          <ul className="expense-list">
            {expenses.map((expense) => (
              <li key={expense.id} className="expense-item">
                <div className="expense-description">
                  <h3 className="expense-title">{expense.title}</h3>
                  <p className="expense-date">{expense.date.toLocaleDateString()}</p>
                </div>
                <div className="expense-amount">₹{expense.amount.toFixed(2)}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Expense Summary */}
      <div className="expense-summary">
        <h2>Total Spent</h2>
        <p>₹{totalAmount.toFixed(2)}</p>
      </div>
      
    </div>
  );
};

export default App;
