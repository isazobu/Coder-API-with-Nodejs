const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Route files
const coders = require("./routes/coders");

const app = express();

//Body Parser
app.use(express.json());

// Dev loggin middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routers
app.use("/api/v1/coders", coders);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server is up and runnning in ${process.env.NODE_ENV} mode on port ${PORT}`
      .yellow.bold
  )
);

// Handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
