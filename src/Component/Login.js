import React from "react";
import Template from "./Template";
import image from "../assets/login.png";

function Login({ setIsLoggedIn }) {
  return (
    <div>
      <Template
        title="Welcome Back"
        dec1="Build skills for today, tomorrow and beyond."
        dec2="Education to future-proof your career."
        image={image}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      ></Template>
    </div>
  );
}

export default Login;
