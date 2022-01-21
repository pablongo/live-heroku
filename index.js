const express = require("express");
require("dotenv").config();
const debug = require("debug")("assembler");
const chalk = require("chalk");
const morgan = require("morgan");
const cors = require("cors");

const userRouter = require("./src/routes/userRouter");

require("./src/config/ddbb.config");

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use("/api/users", userRouter);

server.listen(port, () =>
  debug(`Server is running on ${chalk.magenta(`http://localhost:${port}`)}`)
);
