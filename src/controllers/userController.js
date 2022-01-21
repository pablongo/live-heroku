const User = require("../models/user");

async function getUsers({ query }, res) {
  try {
    const foundUsers = await User.find(query);

    res.json(foundUsers);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function createUser(req, res) {
  try {
    const createdUsers = await User.create(req.body);

    res.json(createdUsers);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = { getUsers, createUser };
