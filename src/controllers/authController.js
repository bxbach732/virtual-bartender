const { userModel } = require("../models/userModel")

async function initiatePasswordless (req, res) {
  try {
    const response = await fetch(`${process.env.ISSUER_BASE_URL}/passwordless/start`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "client_id": process.env.CLIENT_ID,
        "client_secret": process.env.CLIENT_SECRET, 
        "connection": "email",
        "email": req.body.email,
        "send": "code"
      })
    });

    const data = await response.json();
    if (data.error) {
      res.status(400);
    }
    res.send(data);

  } catch (error) {
    res.status(500).send(error);
  };
}

async function authenticate (req, res) {
  try {
    const response = await fetch(`${process.env.ISSUER_BASE_URL}/oauth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "grant_type" : "http://auth0.com/oauth/grant-type/passwordless/otp",
        "client_id": process.env.CLIENT_ID,
        "client_secret": process.env.CLIENT_SECRET, 
        "otp": req.body.otp,
        "realm": "email",
        "username": req.body.email,
        "audience": process.env.API_IDENTIFIER,
        "scope": "openid"
      })
    });

    const data = await response.json();
    if (data.error) {
      res.status(401);
    }

    const another_response = await fetch(`${process.env.ISSUER_BASE_URL}/userinfo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.access_token
      },
    });

    const userData = await another_response.json()
    const authID = userData.sub.split("|")[1];
    const email = userData.email;
    
    const existedUserCheck = await userModel.find({"email": email}).exec();
    console.log(existedUserCheck);
    
    if (existedUserCheck.length == 0) {
      const createdUser = await fetch("https://virtual-bartender-app.herokuapp.com/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                "email": email,
                "authID": authID,
                "isAdmin": false
              })
      });
    }

    res.send(data);

  } catch (error) {
    res.status(500).send(error);
    //throw(error)
  };
}

async function getProfile (req, res) {
  try {
    const response = await fetch(`${process.env.ISSUER_BASE_URL}/userinfo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: req.headers["authorization"]
      },
    });

    if (response.status === 401) {
      res.send(JSON.stringify({"error" : "Unauthorized"}));
    } else {
      const data = await response.json();
      res.send(data);
    };
  } catch (error) {
      res.status(500).send(error);
  }
}

module.exports = {
  initiatePasswordless,
  authenticate,
  getProfile
}