const express = require("express");
require("dotenv").config();
const sequelize = require("./config/db");  

const app = express();

app.use(express.json());  

// Routes
app.use("/api/auth", require("./Routes/authRoutes"));

// Sync DB, then start server
sequelize.sync({ alter: true })
  .then(() => {
    console.log("Database synced");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch(err => console.error("DB Sync Error:", err));
