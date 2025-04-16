import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Room = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = () => {
    if (!name.trim()) {
      setError("Please enter your name to continue.");
      return;
    }

    setError("");
    setLoading(true);

    setTimeout(() => {
      navigate(`/video/${name.trim()}`);
    }, 1000);
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      padding: "20px",
      textAlign: "center",
      animation: "fadeInUp 0.6s ease-in-out",
    },
    heading: {
      fontSize: "28px",
      marginBottom: "20px",
      color: "#333",
    },
    input: {
      width: "280px",
      padding: "12px",
      fontSize: "16px",
      border: "2px solid #282828",
      borderRadius: "6px",
      marginBottom: "15px",
      outline: "none",
    },
    errorMsg: {
      color: "red",
      fontSize: "14px",
      marginBottom: "10px",
    },
    button: {
      width: "150px",
      padding: "10px",
      fontSize: "16px",
      backgroundColor: loading ? "#444" : "#282828",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: loading ? "not-allowed" : "pointer",
      transition: "0.3s",
    },
    fadeInKeyframes: `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
  };

  return (
    <>
      <style>{styles.fadeInKeyframes}</style>

      <div style={styles.container}>
        <h1 style={styles.heading}>🚀 Let’s Start the Video Call</h1>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          onKeyDown={(e) => {
            if (e.key === "Enter") submitHandler();
          }}
          style={styles.input}
        />

        {error && <p style={styles.errorMsg}>{error}</p>}

        <button
          onClick={submitHandler}
          disabled={loading}
          style={styles.button}
        >
          {loading ? "Joining..." : "Join"}
        </button>
      </div>
    </>
  );
};

export default Room;
