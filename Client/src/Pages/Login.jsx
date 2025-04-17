import React, { useState } from "react";
import {
  MDBCard,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
  MDBCardBody,
} from "mdb-react-ui-kit";

import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  username: "",
};

const handleSubmit = () => {};

const onInputChange = () => {};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const { email, username, password } = formData;
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
    >
      <MDBCard alignment="center">
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h5>Login</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row-g3">
            <div className="col-md">
              <MDBInput
                label="Email"
                type="email"
                value={email}
                name="email"
                onChange={onInputChange}
                required
                validation="Please Provide Your Email"
              ></MDBInput>
            </div>
            <div className="col-md">
              <MDBInput
                label="Username"
                type="text"
                value={username}
                name="username"
                onChange={onInputChange}
                required
                validation="Username Cannot Be Empty"
              ></MDBInput>
            </div>
            <div className="col-md">
              <MDBInput
                label="Password"
                type="password"
                value={password}
                name="password"
                onChange={onInputChange}
                required
                validation="Password Cannot Be Empty"
              ></MDBInput>
            </div>
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }} className="mt-2">
                Login
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <p>Dont Have An Account?</p>
          <Link to="/signup">Sign Up</Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default Login;
