require("dotenv").config();

const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const discussionRoute = require("./routes/discussion");

const app = express();
const PORT = process.env.PORT || 8000;

const uri = process.env.MONGO_URL;

if (!uri) {
  throw new Error("The MONGODB_URI environment variable is not set.");
}

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));

app.use("/post", discussionRoute);

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
