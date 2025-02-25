import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Public Pages
import Home from "./Home";
import { Login } from "./Login";
import { Signup } from "./Signup";

// Customer Pages
import CustomerHome from "./pages/customer/CustomerHome";
import Sidebar from "./pages/customer/Sidebar";
import Listings from "./pages/customer/Listings";
import ListingDetails from "./pages/customer/ListingDetails";
import BookingPage from "./pages/customer/BookingPage";
import MyBookings from "./pages/customer/MyBookings";
import Profile from "./pages/customer/Profile";

// Vendor Pages
import VendorDashboard from "./pages/vendor/VendorDashboard";
import VendorSidebar from "./pages/vendor/VendorSidebar";
import AddListing from "./pages/vendor/AddListing";
import Revenue from "./pages/vendor/Revenue";
import Bookings from "./pages/vendor/Bookings";
import ManageListings from "./pages/vendor/ManageListings";
import VendorAnalytics from "./pages/vendor/VendorAnalytics";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminSidebar from "./pages/admin/AdminSidebar";
import ApproveListings from "./pages/admin/ApproveListings";
import ManageUsers from "./pages/admin/ManageUsers";
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminSettings from "./pages/admin/AdminSettings";

// 404 Page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/customer" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Customer Routes */}
        <Route path="/customer" element={<CustomerHome />} />
        <Route path="/customer/sidebar" element={<Sidebar />} />
        <Route path="/customer/listings" element={<Listings />} />
        <Route path="/customer/listings/:id" element={<ListingDetails />} />
        <Route path="/customer/booking/:id" element={<BookingPage />} />
        <Route path="/customer/my-bookings" element={<MyBookings />} />
        <Route path="/customer/profile" element={<Profile />} />

        {/* Vendor Routes */}
        <Route path="/vendor" element={<VendorDashboard />} />
        <Route path="/vendor/sidebar" element={<VendorSidebar />} />
        <Route path="/vendor/add-listing" element={<AddListing />} />
        <Route path="/vendor/revenue" element={<Revenue />} />
        <Route path="/vendor/bookings" element={<Bookings />} />
        <Route path="/vendor/manage-listings" element={<ManageListings />} />
        <Route path="/vendor/analytics" element={<VendorAnalytics />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/sidebar" element={<AdminSidebar />} />
        <Route path="/admin/admin-settings" element={<AdminSettings />} />
        <Route path="/admin/approve-listings" element={<ApproveListings />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/analytics" element={<AdminAnalytics />} />

        {/* 404 Not Found Page */}
      </Routes>
    </Router>
  );
};

export default App;
