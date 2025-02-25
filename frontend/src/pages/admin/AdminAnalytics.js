import React from "react";
import styled from "styled-components";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const AdminAnalytics = () => {
  // Sample data for bookings over the months
  const bookingData = [
    { month: "Jan", bookings: 40 },
    { month: "Feb", bookings: 60 },
    { month: "Mar", bookings: 75 },
    { month: "Apr", bookings: 50 },
    { month: "May", bookings: 90 },
    { month: "Jun", bookings: 110 },
    { month: "Jul", bookings: 80 },
    { month: "Aug", bookings: 70 },
    { month: "Sep", bookings: 95 },
    { month: "Oct", bookings: 130 },
    { month: "Nov", bookings: 120 },
    { month: "Dec", bookings: 140 }
  ];

  // Sample data for users distribution
  const userData = [
    { name: "Customers", value: 3000 },
    { name: "Vendors", value: 120 }
  ];

  const COLORS = ["#4CAF50", "#FF9800"]; // Green for customers, Orange for vendors

  return (
    <Container>
      <h1>📊 Website Analytics</h1>
      <p>View insights on user activity, bookings, and vendor performance.</p>

      {/* Stats Overview */}
      <Stats>
        <StatCard>
          <h2>500+</h2>
          <p>Total Bookings</p>
        </StatCard>
        <StatCard>
          <h2>120</h2>
          <p>Active Vendors</p>
        </StatCard>
        <StatCard>
          <h2>3000+</h2>
          <p>Registered Users</p>
        </StatCard>
      </Stats>

      {/* Charts Section */}
      <ChartsContainer>
        {/* Bar Chart for Monthly Bookings */}
        <ChartCard>
          <h3>📅 Monthly Bookings</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bookingData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="#4C90FF" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Pie Chart for User Distribution */}
        <ChartCard>
          <h3>👥 User Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={userData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {userData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </ChartsContainer>
    </Container>
  );
};

export default AdminAnalytics;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const StatCard = styled.div`
  padding: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  text-align: center;
  width: 150px;
`;

const ChartsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const ChartCard = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 45%;
  min-width: 300px;
  text-align: center;
`;
