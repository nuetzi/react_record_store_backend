const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
    title: String,
    artist: String,
    year: String,
    genre: String,
    image: String
});

const Records = mongoose.model("Record", recordSchema);

module.exports = Records;