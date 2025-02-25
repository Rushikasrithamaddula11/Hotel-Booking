import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [passkey, setPasskey] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [showExtraInput, setShowExtraInput] = useState(false);
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    setShowExtraInput(selectedRole !== "customer");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in as", role, email, password);

    if (role === "customer") {
      navigate("/customer");
    } else if (role === "vendor") {
      if (passkey === "VENDOR123") {
        navigate("/vendor");
      } else {
        alert("Invalid passkey for vendor");
      }
    } else if (role === "admin") {
      if (adminCode === "ADMIN456") {
        navigate("/admin");
      } else {
        alert("Invalid security code for admin");
      }
    }
  };

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleLogin}>
        <h2>Login</h2>
        <Select onChange={handleRoleChange} value={role}>
          <option value="customer">Customer</option>
          <option value="vendor">Vendor</option>
          <option value="admin">Admin</option>
        </Select>
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
        {role === "vendor" && (
          <Input
            type="text"
            placeholder="Enter Vendor Passkey"
            value={passkey}
            onChange={(e) => setPasskey(e.target.value)}
            required
          />
        )}
        {role === "admin" && (
          <Input
            type="text"
            placeholder="Enter Admin Code"
            value={adminCode}
            onChange={(e) => setAdminCode(e.target.value)}
            required
          />
        )}
        <SubmitButton type="submit">Login</SubmitButton>
      </AuthForm>
    </AuthContainer>
  );
};

export { Login };

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

const Select = styled.select`
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

