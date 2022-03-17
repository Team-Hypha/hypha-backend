const express = require("express");
const app = express();

const winston = require("winston");
const axios = require("axios");

const logger = winston.createLogger({
  defaultMeta: { service: "service1" }, // in the future this will be set as an env variable
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs/service1.json",
      handleExceptions: true,
      timestamp: true,
    }),
  ],
  format: winston.format.json(),
});

app.get("/", async (_, res) => {
  logger.info("Welcome to service 1!");
  try {
    const response = await axios.get("http://localhost:3002/");
    res.send(response.data);
  } catch (error) {
    logger.error(error);
    res.sendStatus(500);
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Node.js server listening on http://localhost:${PORT}`);
});
