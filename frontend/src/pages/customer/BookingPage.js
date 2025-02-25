import React from "react";
import styled from "styled-components";

const BookingPage = () => {
  return (
    <Container>
      <h1>Booking Page</h1>
      <p>Complete your booking here.</p>
      <Button>Confirm Booking</Button>
    </Container>
  );
};

export default BookingPage;

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: #ff7f50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #ff4500;
  }
`;
