import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div
        className="content"
        style={{
          height: "auto",
          margin: "30px",
          padding: "20px",
          fontFamily: "'Arial', sans-serif",
          position: "relative", // Make sure overlay and content are on top
          borderRadius: "8px",
          backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,video')", // Replace with any valid image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          overflow: "hidden", // To prevent text from going outside the rounded border
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay to improve text contrast
            borderRadius: "8px",
          }}
        ></div>

        <div style={{ position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontSize: "36px",
              color: "#fff",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "2px",
              transition: "color 0.3s ease",
              paddingTop: "50px",
            }}
          >
            About Us
          </h1>
          <hr style={{ margin: "20px 0", borderColor: "#ccc" }} />

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#fff",
              textAlign: "justify",
              paddingBottom: "20px",
              transition: "color 0.3s ease",
            }}
          >
            Welcome to our Video Call Application! We are a team dedicated to
            bringing you seamless, high-quality video communication. Whether it's
            for business meetings, connecting with friends, or staying in touch
            with family, our app is designed to provide a smooth and interactive
            experience.
          </p>

          <h2
            style={{
              fontSize: "28px",
              color: "#fff",
              paddingBottom: "10px",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#007bff")}
            onMouseOut={(e) => (e.target.style.color = "#fff")}
          >
            Our Mission
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#ddd",
              paddingBottom: "20px",
            }}
          >
            Our mission is simple: to bridge the distance between people. With
            our cutting-edge technology powered by ZEGOCLOUD, we aim to provide a
            platform that connects people with just a click of a button. Our app
            ensures that your conversations are clear, stable, and secure.
          </p>

          <h2
            style={{
              fontSize: "28px",
              color: "#fff",
              paddingBottom: "10px",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#007bff")}
            onMouseOut={(e) => (e.target.style.color = "#fff")}
          >
            How It Works
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#ddd",
              paddingBottom: "20px",
            }}
          >
            The app enables **1-1 video calls** in real-time, offering
            high-quality video and audio streams. We use the power of **WebRTC**
            combined with the **ZEGOCLOUD SDK** to ensure seamless connections.
            - **User-friendly Interface**: Easily start a call with just a few clicks.
            - **Real-time Communication**: Enjoy crisp video and clear audio, even in low-bandwidth situations.
            - **End-to-End Security**: We ensure your conversations remain private and secure.
          </p>

          <h2
            style={{
              fontSize: "28px",
              color: "#fff",
              paddingBottom: "10px",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#007bff")}
            onMouseOut={(e) => (e.target.style.color = "#fff")}
          >
            Why Choose Us?
          </h2>
          <ul
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#ddd",
              listStyleType: "circle",
              paddingLeft: "20px",
            }}
          >
            <li>Easy to use – no complicated setup required.</li>
            <li>High-quality video and audio calls.</li>
            <li>Secure and private communication.</li>
            <li>Supports both desktop and mobile devices.</li>
            <li>Affordable and reliable service.</li>
          </ul>

          <h2
            style={{
              fontSize: "28px",
              color: "#fff",
              paddingBottom: "10px",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.color = "#007bff")}
            onMouseOut={(e) => (e.target.style.color = "#fff")}
          >
            Get in Touch
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#ddd",
              paddingBottom: "20px",
            }}
          >
            If you have any questions, feedback, or need support, feel free to
            reach out to us. We are always happy to help you with anything related
            to our app. You can contact us via email or follow us on social media
            for updates.
          </p>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h3
              style={{
                fontSize: "24px",
                color: "#fff",
                paddingBottom: "10px",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.color = "#007bff")}
              onMouseOut={(e) => (e.target.style.color = "#fff")}
            >
              Any Concern:
            </h3>
            <p
              style={{
                fontSize: "20px",
                color: "#ddd",
                transition: "color 0.3s ease",
              }}
            >
              <a
                href="mailto:coldbladder01@gmail.com"
                style={{
                  textDecoration: "none",
                  color: "#0066cc",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => (e.target.style.color = "#007bff")}
                onMouseOut={(e) => (e.target.style.color = "#0066cc")}
              >
                CLICK ME
              </a>
              <br />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
