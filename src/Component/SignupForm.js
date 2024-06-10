import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function SignupForm() {
  const [FormData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setshowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prve) => {
      setFormData((prve) => ({
        ...prve,
        [event.target.name]: event.target.value,
      }));
    });
  }

  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form>
        <div>
          <label>
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={FormData.firstname}
            ></input>
          </label>

          <label>
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={FormData.lastname}
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
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
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
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </label>
        <button>Sign Up</button>
      </form>

      <div></div>
    </div>
  );
}

export default SignupForm;
