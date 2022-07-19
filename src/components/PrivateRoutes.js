import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ component }) {
  if (localStorage.getItem("loggedIn")) {
    return component;
  } else {
    return <Navigate to={"/login"} />;
  }
}
