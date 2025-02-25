import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const hotels = [
  { id: 1, name: "Grand Plaza", image: "https://tse2.mm.bing.net/th?id=OIP.l0QCx3L1-Waf4IQIXmkSEgHaE8&pid=Api&P=0&h=180" },
  { id: 2, name: "Ocean View", image: "https://tse3.mm.bing.net/th?id=OIP.DdF1miSvcq6OgeD6b67cQgHaE7&pid=Api&P=0&h=180" },
  { id: 3, name: "Mountain Retreat", image: "https://tse1.mm.bing.net/th?id=OIP.qhcfQLmU33E8DqRPhmcEjQHaEK&pid=Api&P=0&h=180" },
];

const Listings = () => {
  return (
    <Container>
      <Title>Hotels & Restaurants</Title>
      <Grid>
        {hotels.map(({ id, name, image }) => (
          <Card key={id}>
            <Image src={image} alt={name} />
            <CardBody>
              <HotelName>{name}</HotelName>
              <StyledLink to={`/customer/listings/${id}`}>View Details</StyledLink>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Listings;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1000px;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 15px;
  text-align: center;
`;

const HotelName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 8px 16px;
  background-color: #6b21a8;
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #4a148c;
  }
`;
