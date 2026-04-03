const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("YOUR-MONGODB-LINK");

// Schema
const BookingSchema = new mongoose.Schema({
  name: String,
  phone: String,
  service: String,
  date: String,
});

const Booking = mongoose.model("Booking", BookingSchema);

// Save booking
app.post("/book", async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.send("Saved");
});

app.listen(3000, () => console.log("Server running"));