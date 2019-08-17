const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express();

// TODO: import routers here
const authRouter = require("./routers/authRouter");

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

module.exports = server;
