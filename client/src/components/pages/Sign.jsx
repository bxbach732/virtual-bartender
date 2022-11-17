import React, { Fragment, useState } from "react";
import { useAuth } from "../useAuth";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Sign() {
  //User is set unto this state.
  const [user, setUsers] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();

  //When data is changed in the form, get the name and value of the change and append or update them onto the user state.
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUsers((values) => ({ ...values, [name]: value }));
  }
  //Login button is pressed.
  function handleSubmit(event) {
    event.preventDefault();

    //Check that all necessary fields are filled, if not, show an alert error.
    if (!user || !user.email || !user.phone) {
      alert("Write your credentials first!");
      return;
    }
    const id = auth.signup(user.email, user.phone);
  }
  return (
    <Fragment>
      <h1>Login</h1>
      <form id="login-form" onSubmit={handleSubmit}>
        <label>
          <TextField label="email" name="email" onChange={handleChange} />
        </label>
        <br />
        <br />
        <label>
          <TextField
            label="phone"
            type="number"
            name="phone"
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <Button
          type="submit"
          value="Submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </Fragment>
  );
}
