import React, { useState } from "react";
import styled from "styled-components";

const AddListing = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    image: null,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.location || !formData.price || !formData.image) {
      setMessage("Please fill in all fields and upload an image.");
      return;
    }
    setMessage("Listing added successfully!");
    // Here you can handle the API call to submit the form data
  };

  return (
    <Container>
      <h1>Add a New Listing</h1>
      <p>Enter your hotel or restaurant details.</p>

      {message && <Message>{message}</Message>}

      <Form onSubmit={handleSubmit}>
        <Label>Hotel/Restaurant Name:</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
          required
        />

        <Label>Location:</Label>
        <Input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter location"
          required
        />

        <Label>Price Per Night:</Label>
        <Input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter price"
          required
        />

        <Label>Upload Image:</Label>
        <FileInput type="file" accept="image/*" onChange={handleFileChange} required />

        <SubmitButton type="submit">Add Listing</SubmitButton>
      </Form>
    </Container>
  );
};

export default AddListing;

// Styled Components
const Container = styled.div`
  max-width: 500px;
  margin: auto;
  text-align: center;
  padding: 40px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Message = styled.p`
  color: green;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  text-align: left;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border 0.3s;
  
  &:focus {
    border-color: #6b21a8;
  }
`;

const FileInput = styled.input`
  border: none;
`;

const SubmitButton = styled.button`
  background-color: #6b21a8;
  color: white;
  padding: 12px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #5a189a;
  }
`;
