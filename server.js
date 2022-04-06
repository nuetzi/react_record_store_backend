// Dependencies
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const db = mongoose.connection;
const app = express();

// Environment Variables
const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3001;

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log("Connected to MongoDB")
);

// Error / Disconnection
db.on("error", err => console.log(err.message));
db.on("disconnected", () => console.log("Mongo disconnected"));

// Middleware
app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// Routes
const recordsController = require("./controllers/routes");
app.use("/records", recordsController);

app.listen(PORT, () => {
    console.log("Listening on port ", PORT);
});