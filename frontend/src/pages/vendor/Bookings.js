import React, { useState } from "react";
import styled from "styled-components";

const Bookings = () => {
  const [filter, setFilter] = useState("All");

  const bookings = [
    { id: 1, customer: "John Doe", date: "2025-02-20", status: "Confirmed" },
    { id: 2, customer: "Jane Smith", date: "2025-02-21", status: "Pending" },
    { id: 3, customer: "Michael Brown", date: "2025-02-22", status: "Canceled" },
    { id: 4, customer: "Emily Davis", date: "2025-02-23", status: "Confirmed" },
  ];

  const filteredBookings = filter === "All" ? bookings : bookings.filter(b => b.status === filter);

  return (
    <Container>
      <h1>Bookings</h1>
      <FilterContainer>
        <FilterButton active={filter === "All"} onClick={() => setFilter("All")}>
          All
        </FilterButton>
        <FilterButton active={filter === "Confirmed"} onClick={() => setFilter("Confirmed")}>
          Confirmed
        </FilterButton>
        <FilterButton active={filter === "Pending"} onClick={() => setFilter("Pending")}>
          Pending
        </FilterButton>
        <FilterButton active={filter === "Canceled"} onClick={() => setFilter("Canceled")}>
          Canceled
        </FilterButton>
      </FilterContainer>

      <BookingList>
        {filteredBookings.length > 0 ? (
          filteredBookings.map(booking => (
            <BookingCard key={booking.id}>
              <BookingInfo>
                <h3>{booking.customer}</h3>
                <p>Date: {booking.date}</p>
                <StatusBadge status={booking.status}>{booking.status}</StatusBadge>
              </BookingInfo>
            </BookingCard>
          ))
        ) : (
          <NoBookings>No bookings found.</NoBookings>
        )}
      </BookingList>
    </Container>
  );
};

export default Bookings;

// Styled Components
const Container = styled.div`
  max-width: 700px;
  margin: auto;
  text-align: center;
  padding: 40px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const FilterButton = styled.button`
  background: ${({ active }) => (active ? "#6b21a8" : "#ddd")};
  color: ${({ active }) => (active ? "white" : "black")};
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: #5a189a;
    color: white;
  }
`;

const BookingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const BookingCard = styled.div`
  background: #f3f4f6;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }
`;

const BookingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  background: ${({ status }) =>
    status === "Confirmed" ? "#10b981" : status === "Pending" ? "#f59e0b" : "#ef4444"};
`;

const NoBookings = styled.p`
  font-size: 18px;
  color: #6b7280;
`;

