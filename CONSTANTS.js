const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  DEV_MODE: Boolean(process.env.NODE_ENV === "development"),
  MONGODB: process.env.MONGODB || "mongodb://localhost:27017/testdb",
};
