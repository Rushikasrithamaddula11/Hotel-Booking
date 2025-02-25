import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Navigation Hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup ? "http://localhost:5000/Signup" : "http://localhost:5000/Login";
    const data = { email, password, ...(isSignup && { username }) };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      alert(result.message);

      if (response.ok) {
        if (isSignup) {
          alert("Signup successful! Redirecting to login...");
          setIsSignup(false); // Switch to login mode
        } else {
          alert("Login successful! Redirecting...");
          navigate("/login"); // Redirect to login page
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleSubmit}>
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        {isSignup && (
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton type="submit">{isSignup ? "Sign Up" : "Login"}</SubmitButton>
        <ToggleButton onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </ToggleButton>
      </AuthForm>
    </AuthContainer>
  );
};

export { Signup };

// Styled Components
const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f4f4;
`;

const AuthForm = styled.form`
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #ff7f50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #ff6347;
  }
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  margin-top: 10px;
  font-size: 14px;
`;
