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

  function signInHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Sign is SuccesFully");
    navigate("/dashboard");
  }

  return (
    <div>
      <form onSubmit={signInHandler}>
        <label>
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            type="email"
            value={formDate.email}
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Id"
          ></input>
        </label>

        <label>
          <p>
            password <sup>*</sup>
          </p>
          <input
            type={showPassword ? "text" : "password"}
            value={formDate.password}
            name="password"
            onChange={changeHandler}
            placeholder="Enter Password"
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
