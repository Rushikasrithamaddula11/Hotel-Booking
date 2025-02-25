import React, { useState } from "react";
import styled from "styled-components";

const AdminSettings = () => {
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState("Light");
  const [siteFontSize, setSiteFontSize] = useState(16);

  return (
    <Container>
      <h1>⚙️ Admin Settings</h1>
      <p>Customize your admin panel preferences</p>

      <SettingsList>
        {/* Notification Toggle */}
        <SettingItem>
          <Label>Enable Notifications</Label>
          <ToggleSwitch>
            <input 
              type="checkbox" 
              checked={notifications} 
              onChange={() => setNotifications(!notifications)} 
            />
            <Slider />
          </ToggleSwitch>
        </SettingItem>

        {/* Theme Selection Dropdown */}
        <SettingItem>
          <Label>Choose Theme</Label>
          <Select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="Light">🌞 Light</option>
            <option value="Dark">🌙 Dark</option>
            <option value="Blue">🔵 Blue</option>
          </Select>
        </SettingItem>

        {/* Font Size Adjuster */}
        <SettingItem>
          <Label>Font Size: {siteFontSize}px</Label>
          <input 
            type="range" 
            min="12" 
            max="24" 
            value={siteFontSize} 
            onChange={(e) => setSiteFontSize(e.target.value)}
          />
        </SettingItem>

        {/* Save Button */}
        <SaveButton onClick={() => alert("Settings Saved!")}>Save Changes</SaveButton>
      </SettingsList>
    </Container>
  );
};

export default AdminSettings;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 40px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
`;

const SettingsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background: #4CAF50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #388E3C;
  }
`;

// Toggle Switch Styles
const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + & {
    background-color: #4CAF50;
  }

  input:checked + &::before {
    transform: translateX(26px);
  }
`;
