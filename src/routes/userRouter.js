const { Router } = require("express");

const { getUsers, createUser } = require("../controllers/userController");

const usersRouter = new Router();

usersRouter.route("/").get(getUsers).post(createUser);

module.exports = usersRouter;
