const express = require("express");

const app = express();

app.use(express.json());

app.use("/api/auth", require("./Routes/authRoutes"));

app.listen(3001, () => console.log("Server running on port 3001"));

const sequelize = require("./config/db"); // adjust if needed

sequelize.sync({ alter: true }) // sync without dropping data
  .then(() => {
    console.log("Database synced");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch(err => console.error("DB Sync Error:", err));
