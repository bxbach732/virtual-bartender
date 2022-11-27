import React, { Fragment, useState, useEffect } from "react";
import { useAuth } from "../useAuth";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Login() {
  //User is set unto this state.
  const [email, setEmail] = useState(null);
  const [otp, setotp] = useState(null);

  const [otpSent, setotpSent] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  //When data is changed in the form, get the name and value of the change and append or update them onto the user state.
  useEffect(() => {
    if (auth.user) {
      navigate("/");
    }
  }, []);
  function handleChange(event) {
    if (event.target.name == "email") setEmail(event.target.value);
    if (event.target.name == "otp") setotp(event.target.value);
  }
  //Login button is pressed.
  async function handleSubmit(event) {
    event.preventDefault();
    if (otpSent) {
      const token = await auth.checkotp(email, otp);
      console.log(token);
    } else {
      if (!email) {
        alert("Write your email first!");
        return;
      }
      const id = await auth.sendotp(email);
      setotpSent(true);
      //Check that all necessary fields are filled, if not, show an alert error.
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
              color="primary"
            >
              Check code
            </Button>
          </form>
          <Button
            onClick={setotpSent(false)}
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
            color="primary"
          >
            Send code
          </Button>
        </form>
      )}
    </Fragment>
  );
}
