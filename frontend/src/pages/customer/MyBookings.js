import React, { useState } from "react";
import styled from "styled-components";

const MyBookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      hotel: "Grand Plaza",
      date: "March 10, 2025",
      status: "Completed",
      image: "https://tse1.mm.bing.net/th?id=OIP.qhcfQLmU33E8DqRPhmcEjQHaEK&pid=Api&P=0&h=180",
    },
    {
      id: 2,
      hotel: "Ocean View Resort",
      date: "April 15, 2025",
      status: "Upcoming",
      image: "https://tse2.mm.bing.net/th?id=OIP.l0QCx3L1-Waf4IQIXmkSEgHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 3,
      hotel: "Mountain Retreat",
      date: "May 5, 2025",
      status: "Upcoming",
      image: "https://tse3.mm.bing.net/th?id=OIP.DdF1miSvcq6OgeD6b67cQgHaE7&pid=Api&P=0&h=180",
    },
  ]);

  const cancelBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
    alert("Booking Canceled!");
  };

  return (
    <Container>
      <h1>My Bookings</h1>
      <p>View and manage your past and upcoming bookings.</p>

      <BookingsList>
        {bookings.length === 0 ? (
          <NoBookings>No bookings available.</NoBookings>
        ) : (
          bookings.map((booking) => (
            <BookingCard key={booking.id}>
              <Image src={booking.image} alt={booking.hotel} />
              <Details>
                <h2>{booking.hotel}</h2>
                <p>Date: {booking.date}</p>
                <Status status={booking.status}>{booking.status}</Status>
                {booking.status === "Upcoming" && (
                  <CancelButton onClick={() => cancelBooking(booking.id)}>Cancel Booking</CancelButton>
                )}
              </Details>
            </BookingCard>
          ))
        )}
      </BookingsList>
    </Container>
  );
};

export default MyBookings;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 50px;
  background: #f4f4f4;
  min-height: 100vh;
`;

const BookingsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const BookingCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
  overflow: hidden;
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 15px;
`;

const Status = styled.p`
  font-weight: bold;
  color: ${(props) => (props.status === "Completed" ? "green" : "blue")};
`;

const CancelButton = styled.button`
  background: #e63946;
  color: white;
  border: none;
  padding: 8px 12px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #c53030;
  }
`;

const NoBookings = styled.p`
  font-size: 18px;
  color: #777;
  font-style: italic;
`;
