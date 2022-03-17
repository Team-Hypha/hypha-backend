const express = require("express");
const app = express();
const winston = require("winston");

const logger = winston.createLogger({
  // defaultMeta: { service: "service2" },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs/service2.json",
      handleExceptions: true,
      timestamp: true,
    }),
  ],
  format: winston.format.json(),
});

app.get("/", (_, res) => {
  logger.warn("Welcome to service 2! DANGER!!!");
  res.send("Response from service 2!");
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Node.js server listening on http://localhost:${PORT}`);
});
