import React, { useState } from "react";
import styled from "styled-components";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", role: "Vendor" },
    { id: 2, name: "Jane Smith", role: "Customer" },
    { id: 3, name: "Alice Brown", role: "Vendor" },
    { id: 4, name: "David Johnson", role: "Customer" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");

  const removeUser = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to remove this user?");
    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterRole === "All" || user.role === filterRole)
  );

  return (
    <Container>
      <h1>Manage Users</h1>

      {/* Search Bar */}
      <SearchInput
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Role Filter Dropdown */}
      <FilterDropdown value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
        <option value="All">All</option>
        <option value="Vendor">Vendor</option>
        <option value="Customer">Customer</option>
      </FilterDropdown>

      {/* User List */}
      <UserList>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserItem key={user.id}>
              <span>{user.name} - {user.role}</span>
              <Button onClick={() => removeUser(user.id)}>Remove</Button>
            </UserItem>
          ))
        ) : (
          <NoUsers>No users found.</NoUsers>
        )}
      </UserList>
    </Container>
  );
};

export default ManageUsers;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 8px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const FilterDropdown = styled.select`
  padding: 8px;
  margin: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const UserList = styled.ul`
  list-style: none;
  padding: 0;
`;

const UserItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #f0f0f0;
  margin: 10px 0;
  border-radius: 5px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    background: darkred;
  }
`;

const NoUsers = styled.p`
  font-size: 16px;
  color: #888;
  margin-top: 20px;
`;
