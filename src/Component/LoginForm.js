import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [formDate, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setshowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function logInHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Sign is Succesfully");
    navigate("/dashboard");
  }

  return (
    <div>
      <form
        onSubmit={logInHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            value={formDate.email}
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Id"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          ></input>
        </label>

        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            password <sup className="text-pink-200">*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            value={formDate.password}
            name="password"
            onChange={changeHandler}
            placeholder="Enter Password"
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
          ></input>

          <span
            onClick={() => {
              setshowPassword((prev) => !prev);
            }}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>

          <Link to="#">
            <p>Forgot Password</p>
          </Link>
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;
