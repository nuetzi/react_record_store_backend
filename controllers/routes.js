const express = require("express");
const router = express.Router();
const Records = require("../models/records");


// Index Route
router.get("/", (req, res) => {
    Records.find({}, (err, foundRecords) => {
        res.json(foundRecords);
    });
});

// Show Route
router.get("/:id", (req, res) => {
    Records.findById(req.params.id, (err, foundRecord) => {
        res.json(foundRecord);
    });
});

// Create Route
router.post("/", (req, res) => {
    Records.create(req.body, (err, createdRecord) => {
        res.json(createdRecord);
    });
});

// Update Route
router.put("/:id", (req, res) => {
    Records.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRecord) => {
        res.json(updatedRecord);
    });    
});

// Delete Route
router.delete("/:id", (req, res) => {
    Records.findByIdAndRemove(req.params.id, (err, deletedRecord) => {
        res.json(deletedRecord);
    })
})

module.exports = router;