const express = require("express");
const { check } = require("express-validator");
const { register, login } = require("../Controller/AuthCOntroller");

const router = express.Router();

router.post("/register", [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({ min: 6 })
], register);

router.post("/login", login);

module.exports = router;
