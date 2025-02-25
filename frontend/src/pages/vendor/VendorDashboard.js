import React from "react";
import { Link } from "react-router-dom";
import { FaList, FaShoppingCart, FaDollarSign, FaPlus } from "react-icons/fa";

const VendorDashboard = () => {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.title}>Vendor Panel</h2>
        <ul style={styles.menu}>
          <li>
            <Link to="/vendor/manage-listings" style={styles.menuItem}>
              <FaList style={styles.icon} />
              <span>Manage Listings</span>
            </Link>
          </li>
          <li>
            <Link to="/vendor/add-listing" style={styles.menuItem}>
              <FaPlus style={styles.icon} />
              <span>Add Listing</span>
            </Link>
          </li>
          <li>
            <Link to="/vendor/bookings" style={styles.menuItem}>
              <FaShoppingCart style={styles.icon} />
              <span>Bookings</span>
            </Link>
          </li>
          <li>
            <Link to="/vendor/revenue" style={styles.menuItem}>
              <FaDollarSign style={styles.icon} />
              <span>Revenue</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.card}>
          <h1 style={styles.heading}>Welcome to the Vendor Dashboard</h1>
          <p style={styles.description}>
            Manage your listings, track bookings, and monitor revenue.
          </p>

          {/* Vendor Stats */}
          <div style={styles.statsContainer}>
            <div style={{ ...styles.statCard, backgroundColor: "#3b82f6" }}>
              <h2 style={styles.statTitle}>Total Listings</h2>
              <p style={styles.statNumber}>12</p>
            </div>
            <div style={{ ...styles.statCard, backgroundColor: "#10b981" }}>
              <h2 style={styles.statTitle}>Total Bookings</h2>
              <p style={styles.statNumber}>37</p>
            </div>
            <div style={{ ...styles.statCard, backgroundColor: "#f59e0b" }}>
              <h2 style={styles.statTitle}>Revenue</h2>
              <p style={styles.statNumber}>$4,520</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS-in-JS Styles
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#6b21a8",
    color: "white",
    height: "100vh",
    padding: "20px",
    position: "fixed",
    left: "0",
    top: "0",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "20px",
  },
  menu: {
    listStyle: "none",
    padding: "0",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px",
    textDecoration: "none",
    color: "white",
    borderRadius: "8px",
    transition: "background 0.3s",
  },
  icon: {
    fontSize: "20px",
  },
  mainContent: {
    marginLeft: "250px",
    flex: 1,
    padding: "40px",
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: "15px",
  },
  description: {
    fontSize: "18px",
    color: "#4b5563",
  },
  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  statCard: {
    color: "white",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s",
  },
  statTitle: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  statNumber: {
    fontSize: "30px",
    fontWeight: "bold",
    marginTop: "10px",
  },
};

export default VendorDashboard;
