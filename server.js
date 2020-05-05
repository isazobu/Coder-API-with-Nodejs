const express = require("express");
const dotenv = require("dotenv");

// Route files
const coders = require("./routes/coders");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// Mount routers
app.use("/api/v1/coders", coders);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is up and runnning in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
