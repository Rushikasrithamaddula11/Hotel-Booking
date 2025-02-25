import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      {/* Navbar */}
      <Navbar>
        <h1>Hotel Booking</h1>
        <NavLinks>
          <StyledLink to="/Login">Login</StyledLink>
          <StyledLink to="/Signup">Sign Up</StyledLink>
        </NavLinks>
      </Navbar>

      {/* Hero Section */}
      <Hero>
        <HeroContent>
          <h2>Find Your Perfect Stay</h2>
          <p>Discover the best hotels at unbeatable prices.</p>
          <ButtonGroup>
            <Button to="/hotels">Start</Button>
          </ButtonGroup>
        </HeroContent>
      </Hero>

      {/* Featured Hotels Section */}
      <Section>
        <h2>Top Rated Hotels</h2>
        <CardContainer>
          <HotelCard>
            <img src="https://tse1.mm.bing.net/th?id=OIP.qhcfQLmU33E8DqRPhmcEjQHaEK&pid=Api&P=0&h=180" alt="Hotel 1" />
            <h3>Grand Plaza</h3>
            <p>⭐⭐⭐⭐⭐</p>
          </HotelCard>
          <HotelCard>
            <img src="https://tse3.mm.bing.net/th?id=OIP.DdF1miSvcq6OgeD6b67cQgHaE7&pid=Api&P=0&h=180" alt="Hotel 2" />
            <h3>Ocean View</h3>
            <p>⭐⭐⭐⭐</p>
          </HotelCard>
          <HotelCard>
            <img src="https://tse2.mm.bing.net/th?id=OIP.l0QCx3L1-Waf4IQIXmkSEgHaE8&pid=Api&P=0&h=180" alt="Hotel 3" />
            <h3>Mountain Retreat</h3>
            <p>⭐⭐⭐⭐⭐</p>
          </HotelCard>
        </CardContainer>
      </Section>

      {/* Reviews Section */}
      <Section>
        <h2>What Our Guests Say</h2>
        <CardContainer>
          <ReviewCard>
            <p>"Amazing stay! Best experience ever!"</p>
            <h4>- Alice</h4>
          </ReviewCard>
          <ReviewCard>
            <p>"Loved the service and ambience."</p>
            <h4>- John</h4>
          </ReviewCard>
          <ReviewCard>
            <p>"Highly recommended for families!"</p>
            <h4>- Sophia</h4>
          </ReviewCard>
        </CardContainer>
      </Section>

      {/* About Us Section */}
      <AboutUsSection>
        <h2>About Us</h2>
        <p>
          Welcome to Hotel Booking, your ultimate destination for hassle-free hotel reservations.
          We strive to provide a seamless and luxurious experience for our customers by connecting
          them with the finest hotels across the globe. Our mission is to make travel effortless
          and enjoyable with unbeatable deals and top-notch service.
        </p>
        <p>
          Whether you're looking for a budget-friendly stay or a five-star retreat, we have something
          for everyone. Experience comfort, convenience, and a world of hospitality with us.
        </p>
      </AboutUsSection>

      {/* Contact Us Section */}
      <ContactSection>
        <h2>Contact Us</h2>
        <ContactForm>
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Textarea placeholder="Your Message"></Textarea>
          <SubmitButton>Send Message</SubmitButton>
        </ContactForm>
      </ContactSection>

      {/* Footer */}
      <Footer>
        <p>© 2025 Hotel Booking. All rights reserved.</p>
      </Footer>
    </Container>
  );
};

export default Home;

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
`;

// Navbar
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #333;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

// Hero Section
const Hero = styled.header`
  background: url('https://tse3.mm.bing.net/th?id=OIP.BIJVgZnMXtSrJGB86S6uhQHaDS&pid=Api&P=0&h=180') center/cover no-repeat;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
`;

const HeroContent = styled.div`
  h2 {
    font-size: 40px;
    margin-bottom: 10px;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 20px;
`;

const Button = styled(Link)`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  background: #ff7f50;
  color: white;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    background: #ff6347;
  }
`;

// Section
const Section = styled.section`
  text-align: center;
  padding: 50px 20px;
`;

// Hotel & Review Cards
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const HotelCard = styled.div`
  width: 200px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 10px;
  text-align: center;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const ReviewCard = styled.div`
  width: 250px;
  padding: 20px;
  background: #fff3cd;
  border-radius: 10px;
  text-align: center;
`;

// About Us Section
const AboutUsSection = styled.section`
  text-align: center;
  padding: 50px 20px;
  background: #f8f8f8;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
  p {
    font-size: 18px;
    line-height: 1.6;
    color: #333;
  }
`;

// Contact Us Section
const ContactSection = styled.section`
  text-align: center;
  padding: 50px 20px;
  background: #f8f8f8;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  height: 100px;
`;

const SubmitButton = styled.button`
  background: #ff7f50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #ff6347;
  }
`;

// Footer
const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background: #222;
  color: white;
`;
