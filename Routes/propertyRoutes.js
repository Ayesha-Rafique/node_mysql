const express = require("express");
const { createProperty, getProperties, updateProperty, deleteProperty } = require("../Controller/propertyController");
const authMiddleware = require("../Middleware/authMiddleware");

const router = express.Router();

// Routes for property management
router.post("/", authMiddleware, createProperty); // Create a property
router.get("/", authMiddleware, getProperties); // Get all properties for the logged-in user
router.put("/:id", authMiddleware, updateProperty); // Update a property by ID
router.delete("/:id", authMiddleware, deleteProperty); // Delete a property by ID

module.exports = router;