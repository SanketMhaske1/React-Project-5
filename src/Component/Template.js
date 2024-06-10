import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

function Template({ title, dec1, dec2, image, formtype, setIsLoggedIn }) {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{dec1}</span>
          <span>{dec2}</span>
        </p>

        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
        )}

        <div>
          <div></div>
          <p>or</p>
          <div></div>
        </div>

        <div>
          <button>Sign Up With Google</button>
        </div>
      </div>

      <div>
        <img
          src={frame}
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
        ></img>
        <img
          src={image}
          alt="Student"
          width={558}
          height={499}
          loading="lazy"
        ></img>
      </div>
    </div>
  );
}

export default Template;
