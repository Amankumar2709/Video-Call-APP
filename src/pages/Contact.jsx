import React from "react";
import Layout from "../components/Layout/Layout";

const Contact = () => {
  const styles = {
    container: {
      height: "auto",
      margin: "30px",
      background: "#f9fafb",
      padding: "40px",
      borderRadius: "16px",
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "2.5rem",
      color: "#2563eb",
      marginBottom: "10px",
      textAlign: "center",
    },
    line: {
      height: "3px",
      backgroundColor: "#2563eb",
      width: "80px",
      margin: "0 auto 30px auto",
      borderRadius: "4px",
    },
    info: {
      fontSize: "1.2rem",
      color: "#333",
      margin: "12px 0",
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    emoji: {
      fontSize: "1.4rem",
    },
    footerText: {
      marginTop: "30px",
      fontSize: "1.1rem",
      color: "#444",
      textAlign: "center",
    },
    link: {
      display: "inline-block",
      color: "#0a66c2",
      textDecoration: "none",
      fontWeight: "600",
      marginTop: "10px",
      fontSize: "1.1rem",
    },
  };

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.title}>📞 Contact Us</h1>
        <div style={styles.line}></div>

        <div style={styles.info}>
          <span style={styles.emoji}>📱</span> Phone: +91 7982490613
        </div>
        <div style={styles.info}>
          <span style={styles.emoji}>📧</span> Email: amanpandit@gmail.com
        </div>
        <div style={styles.info}>
          <span style={styles.emoji}>🐙</span>GitHub : Amankumar2709
        </div>
        <div style={styles.info}>
          <span style={styles.emoji}>📸</span> Instagram: a.manvibes
        </div>
        <div style={styles.info}>
          <span style={styles.emoji}>💼</span> LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/aman-kumar-95426124b/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            Visit my LinkedIn
          </a>
        </div>

        <p style={styles.footerText}>💬 Feel free to ask me anything!</p>
      </div>
    </Layout>
  );
};

export default Contact;
