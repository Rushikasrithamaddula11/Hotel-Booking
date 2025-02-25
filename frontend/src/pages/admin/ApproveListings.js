import React, { useState } from "react";
import styled from "styled-components";

const ApproveListings = () => {
  const [listings, setListings] = useState([
    { id: 1, title: "Luxury Hotel in Paris", vendor: "John Doe", status: "Pending" },
    { id: 2, title: "Cozy Beach House", vendor: "Jane Smith", status: "Pending" },
    { id: 3, title: "Mountain Cabin Retreat", vendor: "Alice Brown", status: "Approved" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Function to approve a listing
  const handleApprove = (id) => {
    setListings(
      listings.map((listing) =>
        listing.id === id ? { ...listing, status: "Approved" } : listing
      )
    );
  };

  // Function to reject a listing
  const handleReject = (id) => {
    setListings(
      listings.map((listing) =>
        listing.id === id ? { ...listing, status: "Rejected" } : listing
      )
    );
  };

  // Filtered Listings based on search and status
  const filteredListings = listings.filter(
    (listing) =>
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterStatus === "All" || listing.status === filterStatus)
  );

  return (
    <Container>
      <h1>Approve or Reject Listings</h1>
      <p>Review and approve vendor listings.</p>

      {/* Search and Filter Controls */}
      <Controls>
        <SearchInput
          type="text"
          placeholder="Search listings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <FilterDropdown value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </FilterDropdown>
      </Controls>

      {/* Listings Display */}
      <ListingsContainer>
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <ListingCard key={listing.id} status={listing.status}>
              <div>
                <h3>{listing.title}</h3>
                <p>Vendor: {listing.vendor}</p>
                <StatusTag status={listing.status}>{listing.status}</StatusTag>
              </div>
              {listing.status === "Pending" && (
                <ButtonGroup>
                  <ApproveButton onClick={() => handleApprove(listing.id)}>Approve</ApproveButton>
                  <RejectButton onClick={() => handleReject(listing.id)}>Reject</RejectButton>
                </ButtonGroup>
              )}
            </ListingCard>
          ))
        ) : (
          <NoListings>No listings found.</NoListings>
        )}
      </ListingsContainer>
    </Container>
  );
};

export default ApproveListings;

// Styled Components
const Container = styled.div`
  text-align: center;
  padding: 50px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 8px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FilterDropdown = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ListingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListingCard = styled.div`
  width: 400px;
  background: ${(props) =>
    props.status === "Approved"
      ? "#d1fae5"
      : props.status === "Rejected"
      ? "#fee2e2"
      : "white"};
  padding: 15px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatusTag = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  background-color: ${(props) =>
    props.status === "Approved" ? "#10b981" :
    props.status === "Rejected" ? "#ef4444" :
    "#fbbf24"};
  color: white;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ApproveButton = styled.button`
  background: #10b981;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #059669;
  }
`;

const RejectButton = styled.button`
  background: #ef4444;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #dc2626;
  }
`;

const NoListings = styled.p`
  font-size: 16px;
  color: #888;
  margin-top: 20px;
`;
