require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/hotel_booking", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));

// ✅ User Schema & Model
const UserSchema = new mongoose.Schema({
  username: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", UserSchema);

// ✅ Hotel Schema & Model
const HotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  price: Number,
  availability: Boolean,
});
const Hotel = mongoose.model("Hotel", HotelSchema);

// ✅ Booking Schema & Model
const BookingSchema = new mongoose.Schema({
  hotelId: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel", required: true },
  customerName: String,
  checkIn: Date,
  checkOut: Date,
});
const Booking = mongoose.model("Booking", BookingSchema);

// ✅ AUTH ROUTES
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.json({ success: true, message: "User registered successfully!" });
  } catch (error) {
    console.error("❌ SignUp Failed:", error);
    res.status(500).json({ success: false, message: "Error registering user" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }
    res.json({ success: true, message: "Login successful!" });
  } catch (error) {
    console.error("❌ Login Failed:", error);
    res.status(500).json({ success: false, message: "Error logging in" });
  }
});

// ✅ HOTEL ROUTES
app.get("/hotels", async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hotels" });
  }
});

app.get("/hotels/:id", async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });
    res.json(hotel);
  } catch (error) {
    res.status(500).json({ message: "Error fetching hotel details" });
  }
});

// ✅ BOOKING ROUTES
app.post("/booking", async (req, res) => {
  const { hotelId, customerName, checkIn, checkOut } = req.body;
  try {
    const newBooking = new Booking({ hotelId, customerName, checkIn, checkOut });
    await newBooking.save();
    res.json({ success: true, message: "Booking successful!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error processing booking" });
  }
});

app.get("/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find().populate("hotelId");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
});

app.get("/bookings/:id", async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate("hotelId");
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error fetching booking details" });
  }
});

// ✅ START SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
