const express = require("express");
const User = require("../models/User");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

const router = express.Router();

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Generate OTP Function
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// 📌 1. Send OTP to Email
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email });
    }

    // Generate OTP and Expiry Time
    const otp = generateOTP();
    user.otp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes expiry
    await user.save();

    // Send OTP via Email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}. It is valid for 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: "OTP sent successfully!" });

  } catch (err) {
    res.status(500).json({ error: "Error sending OTP" });
  }
});

// 📌 2. Verify OTP and Complete Signup
router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || user.otp !== otp || user.otpExpires < Date.now()) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    user.isVerified = true;
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    res.json({ message: "User verified successfully!" });

  } catch (err) {
    res.status(500).json({ error: "Verification failed" });
  }
});

module.exports = router;
