import "./App.css";
import Signup from "./components/Signup";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./components/Login";
import PrivateRoutes from "./components/PrivateRoutes";
import { useState } from "react";
import { signUpUserInFirebase, logInUserInFirebase } from "./helpers.js/helper";
import Dashboard from "./components/Dashboard";

function App() {
  const [message, setMessage] = useState();
  const [currentUser, setCurrentUser] = useState();
  const navigate = useNavigate();

  const signUpUser = (e) => {
    e.preventDefault();
    const userEmail = e.target[0].value;
    const userPass = e.target[1].value;
    const userConfirmPass = e.target[2].value;
    if (userEmail === "" || userPass === "" || userConfirmPass === "") {
      setMessage("Fill Out Details");
    } else if (userPass !== userConfirmPass) {
      setMessage("Password Not Match");
    } else {
      signUpUserInFirebase(userEmail, userPass)
        .then((res) => {
          setCurrentUser(userEmail);
          navigate("/");
          localStorage.setItem("loggedIn", "isLoggedIn");
        })
        .catch((err) => setMessage(err.message));
    }
  };

  const logInUser = (e) => {
    e.preventDefault();
    const userEmail = e.target[0].value;
    const userPass = e.target[1].value;

    if (userEmail === "" || userPass === "") {
      setMessage("Fill Out Details");
    } else {
      logInUserInFirebase(userEmail, userPass)
        .then((res) => {
          navigate("/");
          localStorage.setItem("loggedIn", "isLoggedIn");
        })
        .catch((err) => setMessage(err.message));
    }
    localStorage.setItem("loggedIn", "isLoggedIn");
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/signup"
          element={<Signup message={message} submit={signUpUser} />}
        />
        <Route
          path="/login"
          element={<Login message={message} submit={logInUser} />}
        />
        <Route
          path="/"
          element={
            <PrivateRoutes component={<Dashboard user={currentUser} />} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
