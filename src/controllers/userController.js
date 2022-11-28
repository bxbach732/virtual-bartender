const { userModel } = require("../models/userModel");
const { shelfModel } = require("../models/shelfModel");
const fetch = require("node-fetch");

//Basic CRUD APIs
async function listAll(req, res) { //Get all users
  try {
    const data = await userModel.find().exec();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function listUser(req, res) { //Get an user
  try {
    const data = await userModel.findById(req.params.id).exec();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function createUser(req, res) { //Create a new user
  try {
    const newUser = new userModel(req.body);
    const userID = newUser.authID;
    const data = await newUser.save();

    const createdShelf = await fetch(
      "https://virtual-bartender1.herokuapp.com/shelf",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userID: userID,
          content: [],
        }),
      }
    );
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function updateUser(req, res) { //Update an user
  try {
    let userData = await userModel.findById(req.params.id).exec();
    userData.set(req.body);
    const data = await userData.save();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteUser(req, res) { //Delete an user
  try {
    const data = await userModel.deleteOne({ _id: req.params.id }).exec();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getShelf(req, res) { //Get a shelf
  try {
    const data = await shelfModel.findOne({ userID: req.params.id }).exec();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getUserID(req, res) { //Get an user id
  //get userid from phone or email
  try {
    const data = await userModel.find({ email: req.query.email }).exec();
    res.send(data[0].authID);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  listAll,
  listUser,
  createUser,
  updateUser,
  deleteUser,
  getShelf,
  getUserID,
};