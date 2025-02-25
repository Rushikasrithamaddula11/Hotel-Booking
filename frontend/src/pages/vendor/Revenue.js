import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Revenue = () => {
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [500, 800, 1200, 1500, 1800, 2200],
        backgroundColor: "#6b21a8",
        borderRadius: 5,
      },
    ],
  };

  const transactions = [
    { id: 1, customer: "John Doe", amount: "$200", date: "2025-02-20" },
    { id: 2, customer: "Jane Smith", amount: "$150", date: "2025-02-21" },
    { id: 3, customer: "Michael Brown", amount: "$300", date: "2025-02-22" },
  ];

  return (
    <Container>
      <h1>Revenue Overview</h1>
      <RevenueCard>
        <h2>Total Revenue</h2>
        <RevenueAmount>$4,520</RevenueAmount>
      </RevenueCard>

      <ChartContainer>
        <h3>Revenue Trend</h3>
        <Bar data={revenueData} />
      </ChartContainer>

      <TransactionsContainer>
        <h3>Recent Transactions</h3>
        <TransactionList>
          {transactions.map((tx) => (
            <TransactionItem key={tx.id}>
              <span>{tx.customer}</span>
              <span>{tx.amount}</span>
              <span>{tx.date}</span>
            </TransactionItem>
          ))}
        </TransactionList>
      </TransactionsContainer>
    </Container>
  );
};

export default Revenue;

// Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: auto;
  text-align: center;
  padding: 40px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const RevenueCard = styled.div`
  background: #6b21a8;
  color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
`;

const RevenueAmount = styled.h2`
  font-size: 32px;
  font-weight: bold;
`;

const ChartContainer = styled.div`
  margin: 20px 0;
`;

const TransactionsContainer = styled.div`
  margin-top: 20px;
`;

const TransactionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

const TransactionItem = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f3f4f6;
  padding: 10px;
  border-radius: 5px;
`;
