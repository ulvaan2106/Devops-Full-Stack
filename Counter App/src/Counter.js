import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const target = 10; // Message trigger value

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🎯 Counter Application</h2>

        <h1 style={styles.count}>{count}</h1>

        {/* Bonus Message */}
        {count === target && (
          <p style={styles.message}>
            🎉 Congratulations! You reached {target}!
          </p>
        )}

        <div style={styles.buttonGroup}>
          <button onClick={increment} style={styles.increment}>
            Increment
          </button>

          <button
            onClick={decrement}
            style={{
              ...styles.decrement,
              opacity: count === 0 ? 0.5 : 1,
              cursor: count === 0 ? "not-allowed" : "pointer"
            }}
            disabled={count === 0}
          >
            Decrement
          </button>

          <button onClick={reset} style={styles.reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea, #764ba2, #ff758c)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    width: "300px"
  },
  title: {
    color: "#fff",
    marginBottom: "15px"
  },
  count: {
    fontSize: "3rem",
    color: "#fff",
    marginBottom: "15px"
  },
  message: {
    color: "#00ffcc",
    fontWeight: "bold",
    marginBottom: "15px"
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between"
  },
  increment: {
    padding: "10px 15px",
    borderRadius: "20px",
    border: "none",
    background: "linear-gradient(135deg, #00f2fe, #4facfe)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer"
  },
  decrement: {
    padding: "10px 15px",
    borderRadius: "20px",
    border: "none",
    background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
    color: "#fff",
    fontWeight: "bold"
  },
  reset: {
    padding: "10px 15px",
    borderRadius: "20px",
    border: "none",
    background: "linear-gradient(135deg, #43e97b, #38f9d7)",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer"
  }
};

export default Counter;
