const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const setupGlobalMiddleware = require("./setup-middleware");

const server = express();

setupGlobalMiddleware(server);

// TODO: import routers here
const authRouter = require("./routers/authRouter");
const ratingsRouter = require("./routers/ratingsRouter");

server.use(helmet());
server.use(bodyParser.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send(
    "The Servable server is up!!! <br> Be happy, I can crash at any minute."
  );
});

// TODO: Implement routers here
server.use("/api/auth", authRouter);
server.use("/api/ratings", ratingsRouter);

module.exports = server;
