import React from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const ListingDetails = () => {
  const { id } = useParams();

  return (
    <Container>
      <h1>Listing Details - {id}</h1>
      <p>Hotel details go here...</p>
      <StyledLink to={`/customer/booking/${id}`}>Book Now</StyledLink>
    </Container>
  );
};

export default ListingDetails;

const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  background: #ff7f50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background: #ff4500;
  }
`;
