import React, { useState } from "react";
import styled from "styled-components";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Passionate traveler and food lover.",
    password: "",
    image: "https://source.unsplash.com/150x150/?portrait",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, image: imageUrl });
    }
  };

  const handleSave = () => {
    alert("Profile Updated Successfully!");
  };

  return (
    <Container>
      <ProfileCard>
        <AvatarContainer>
          <Avatar src={user.image} alt="Profile" />
          <ImageInput type="file" accept="image/*" onChange={handleImageChange} />
        </AvatarContainer>

        <h1>Edit Profile</h1>

        <Form>
          <Label>Name</Label>
          <Input type="text" name="name" value={user.name} onChange={handleChange} />

          <Label>Email</Label>
          <Input type="email" name="email" value={user.email} onChange={handleChange} />

          <Label>Bio</Label>
          <TextArea name="bio" value={user.bio} onChange={handleChange} />

          <Label>Password</Label>
          <Input type="password" name="password" placeholder="Enter new password" onChange={handleChange} />

          <SaveButton onClick={handleSave}>Save Changes</SaveButton>
        </Form>
      </ProfileCard>
    </Container>
  );
};

export default Profile;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f4f4;
`;

const ProfileCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 350px;
`;

const AvatarContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-bottom: 15px;
  border: 3px solid #6b21a8;
  cursor: pointer;
`;

const ImageInput = styled.input`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  width: 120px;
  height: 120px;
  cursor: pointer;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0 5px;
  align-self: flex-start;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 14px;
  resize: none;
`;

const SaveButton = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  font-size: 16px;
  background: #6b21a8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #4a148c;
  }
`;
