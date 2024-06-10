import React from "react";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

function Template({ title, dec1, dec2, image, formtype, setIsLoggedIn }) {
  return (
    <div className="flex justify-between gap-x-12 w-11/12 max-w-[1160px] py-12 mx-auto">
      <div>
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">
          {title}
        </h1>
        <p className="text-[1.25rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100">{dec1}</span>
          <br />
          <span className="text-blue-100 italic">{dec2}</span>
        </p>

        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px]  bg-white"></div>
          <p className="text-richblack-700 font-medium  leading-[1.375rem]">
            or
          </p>
          <div className="w-full h-[1px]  bg-white"></div>
        </div>

        <div
          className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100
        border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6"
        >
          <FcGoogle></FcGoogle>
          <button>Sign Up With Google</button>
        </div>
      </div>

      <div className="relative w-11/12 max-w-[450px]">
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
          className="absolute -top-4 right-4"
        ></img>
      </div>
    </div>
  );
}

export default Template;
