import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignupForm({ setIsLoggedIn }) {
  const navigation = useNavigate();

  const [FormData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setshowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function signupHandler(event) {
    event.preventDefault();

    if (FormData.password !== FormData.confirmPassword) {
      toast.error("Password Do Not Match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created Succesfully");
    navigation("/dashboard");
  }

  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={signupHandler}>
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={FormData.firstName}
            ></input>
          </label>

          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={FormData.lastName}
            ></input>
          </label>
        </div>

        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={FormData.email}
          ></input>
        </label>

        <label>
          <p>
            Enter Password<sup>*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={changeHandler}
            placeholder="Enter Password"
            value={FormData.password}
          ></input>
          <span
            onClick={() => {
              setshowPassword((prev) => !prev);
            }}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>{" "}
        </label>

        <label>
          <p>
            Confirm Password<sup>*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            onChange={changeHandler}
            placeholder="Confirm Password"
            value={FormData.confirmPassword}
          ></input>
          <span
            onClick={() => {
              setshowPassword((prev) => !prev);
            }}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>{" "}
        </label>
        <button>Sign Up</button>
      </form>

      <div></div>
    </div>
  );
}

export default SignupForm;
