const { userModel } = require("../models/userModel")
const fetch = require("node-fetch");

async function listAll (req, res) {
    try {
        const data = await userModel.find().exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function listUser (req, res) {
    try {
        const data = await userModel.findById(req.params.id).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function createUser (req, res) {
    try {
        const newUser = new userModel(req.body);
        const userID = newUser._id;
        const data = await newUser.save();

        const createdShelf = await fetch("http://localhost:7777/shelf", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "userID": userID,
              "content": []
            })
        });
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateUser (req, res) {
    try {   
        let userData = await userModel.findById(req.params.id).exec();
        userData.set(req.body);
        const data = await userData.save();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function deleteUser (req, res) {
    try {
        const data = await userModel.deleteOne({'_id': req.params.id}).exec();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    listAll,
    listUser,
    createUser,
    updateUser,
    deleteUser
}