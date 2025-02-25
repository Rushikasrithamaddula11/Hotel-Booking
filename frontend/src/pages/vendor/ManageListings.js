import React, { useState } from "react";
import styled from "styled-components";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([
    { id: 1, customer: "John Doe", status: "Pending" },
    { id: 2, customer: "Alice Brown", status: "Confirmed" },
  ]);

  const updateStatus = (id, status) => {
    setBookings(bookings.map(booking =>
      booking.id === id ? { ...booking, status } : booking
    ));
  };

  return (
    <Container>
      <h1>Manage Customer Bookings</h1>
      <BookingList>
        {bookings.map((booking) => (
          <BookingItem key={booking.id}>
            <span>{booking.customer} - {booking.status}</span>
            <Button onClick={() => updateStatus(booking.id, "Confirmed")}>Confirm</Button>
            <ButtonCancel onClick={() => updateStatus(booking.id, "Cancelled")}>Cancel</ButtonCancel>
          </BookingItem>
        ))}
      </BookingList>
    </Container>
  );
};

export default ManageBookings;

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const BookingList = styled.ul`
  list-style: none;
  padding: 0;
`;

const BookingItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: #f0f0f0;
  margin: 10px 0;
  border-radius: 5px;
`;

const Button = styled.button`
  background: green;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: darkgreen;
  }
`;

const ButtonCancel = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background: darkred;
  }
`;
