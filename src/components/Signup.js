import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Signup = ({ submit, message }) => {
  const navigate = useNavigate();
  const loaction = useLocation();

  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      if (loaction.pathname !== "/") {
        navigate("/");
      }
    }
  }, []);

  return (
    <div className="card">
      <h1>Sign Up</h1>
      <p className={message ? "error" : ""}>{message}</p>
      <form onSubmit={submit}>
        <label>Email</label>
        <input type={"email"} placeholder="Enter Email" />
        <label>Password</label>
        <input type={"password"} placeholder="Enter Password" />
        <label>Confirm Password</label>
        <input type={"password"} placeholder="Confirm Password" />
        <button type="submit">Sign Up</button>
      </form>
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        Already have a account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
