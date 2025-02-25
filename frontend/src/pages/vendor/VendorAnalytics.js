import React from "react";
import styled from "styled-components";

const VendorAnalytics = () => {
  return (
    <Container>
      <h1>Listing Analytics</h1>
      <p>Track performance of your hotel or restaurant.</p>
      <Stats>
        <StatCard>
          <h2>120</h2>
          <p>Total Bookings</p>
        </StatCard>
        <StatCard>
          <h2>4.8</h2>
          <p>Average Rating</p>
        </StatCard>
        <StatCard>
          <h2>500+</h2>
          <p>Visitors This Month</p>
        </StatCard>
      </Stats>
    </Container>
  );
};

export default VendorAnalytics;

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const StatCard = styled.div`
  padding: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  text-align: center;
  width: 150px;
`;
