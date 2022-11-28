import React, { Fragment, useState, useEffect } from "react";
import { useAuth } from "../useAuth";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

// render Login page (https://virtual-bartender1.herokuapp.com/#/login)
export default function Login() {
  // user is set unto this state.
  const [email, setEmail] = useState(null);
  const [otp, setotp] = useState(null);

  const [otpSent, setotpSent] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  
  // when data is changed in the form, get the name and value of the change and append or update them onto the user state.
  useEffect(() => {
    if (auth.user) {
      navigate("/");
    }
  }, [navigate, auth.user]);

  // handle when input value changes
  function handleChange(event) {
    if (event.target.name === "email") setEmail(event.target.value);
    if (event.target.name === "otp") setotp(event.target.value);
  }

  // login button is pressed.
  async function handleSubmit(event) {
    event.preventDefault();
    if (otpSent) {
      const token = await auth.checkotp(email, otp);
      console.log(token);
    } else {
      // check that all necessary fields are filled, if not, show an alert error
      if (!email) {
        alert("Write your email first!");
        return;
      }
      auth.sendotp(email);
      setotpSent(true);
    }
  }
  return (
    <Fragment>
      <h1>Login</h1>
      {otpSent ? (
        <Fragment>
          <span>Input the one time code sent to your email</span>
          <form id="login-form" onSubmit={handleSubmit}>
            <label>
              <TextField label="Code" name="otp" onChange={handleChange} />
            </label>
            <br />
            <br />
            <Button
              type="submit"
              value="Submit"
              variant="contained"
              color="secondary"
            >
              Check code
            </Button>
          </form>
          <br />

          <br />
          <Button
            onClick={() => {
              setotpSent(false);
            }}
            variant="contained"
            color="primary"
          >
            Go back
          </Button>
        </Fragment>
      ) : (
        <form id="login-form" onSubmit={handleSubmit}>
          <label>
            <TextField label="email" name="email" onChange={handleChange} />
          </label>
          <br />
          <br />
          <Button
            type="submit"
            value="Submit"
            variant="contained"
            color="secondary"
          >
            Send code
          </Button>
        </form>
      )}
    </Fragment>
  );
}
