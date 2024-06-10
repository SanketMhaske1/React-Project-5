import React from "react";
import image from "../assets/signup.png";
import Template from "./Template";

function Signup({ setIsLoggedIn }) {
  return (
    <div>
      <Template
        title="Join themillions learning to code with StudyNotion for free"
        dec1="Build skills for today, tomorrow and beyond."
        dec2="Education to future-proof your career."
        image={image}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      ></Template>
    </div>
  );
}

export default Signup;
