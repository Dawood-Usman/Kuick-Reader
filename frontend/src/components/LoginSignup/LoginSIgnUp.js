import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "./../../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginSignupPage() {
  const navigate = useNavigate();

  const [isLoginForm, setIsLoginForm] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const controlFormToggle = () => {
    setIsLoginForm(!isLoginForm);
    setEmail("");
    setFullName("");
    setPassword("");
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("/signIn", { email, password });
      if (response.status === 200) {
        notify(response.data.SuccessMsg);
        const Token = response.data.Token;
        navigate("/dashboard", {
          state: {
            email,
            Token,
          },
        });
      }
    } catch (error) {
      notify(error.response.data.ErrorMsg);
    }
  };

  const handleSignup = async () => {
    try {
      const response = await axios.post("/signUp", {
        fullName,
        email,
        password,
      });
      if (response.status === 200) {
        notify("Code Sent! Check Your Mail.");
        const userJWT = response.data.userJWT;
        navigate("/verification", {
          state: {
            email,
            userJWT,
          },
        });
      }
    } catch (error) {
      notify(error.response.data.ErrorMsg);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoginForm) {
      if (email !== "" && password !== "") handleLogin();
    } else {
      if (fullName !== "" && email !== "" && password !== "") handleSignup();
    }
  };

  const notify = (msg) => toast(msg);

  return (
    <div className="flex overflow-hidden relative h-screen">
      <div
        id="SC"
        className={`flex-1 bg-gray-200 justify-center items-center duration-700 hidden md:flex transition-all ease-in-out ${
          isLoginForm ? "right-0" : "left-0"
        } ${isLoginForm ? "translte-x-0" : ""}`}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold">Welcome to kuickReader!</h1>
          <p className="text-gray-500 text-lg mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            scelerisque elit ac purus varius ullamcorper.
          </p>
        </div>
      </div>
      <div
        id="LSF"
        className={`flex-1 flex justify-center items-center duration-700 transition-all ease-in-out ${
          isLoginForm ? "left-0" : "right-0"
        } ${isLoginForm ? "-translte-x-0" : ""}`}
      >
        <form
          onSubmit={handleSubmit}
          action=""
          className="w-[400px] bgForm px-6 py-5 rounded shadow-md"
        >
          <div className="flex flex-col">
            <h2 className="text-center text-2xl py-8 font-bold">
              {isLoginForm ? "Login" : "SignUp"}
            </h2>

            <div className="">
              <div className="flex justify-center">
                <button className="text-xl mx-2 text-blue-500 hover:text-blue-700 focus:outline-none ease-in-out duration-200 hover:scale-110">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="rounded-full border-2 border-blue-500 p-1"
                  />
                </button>
                <button className="text-xl mx-2 text-red-600 hover:text-red-800 focus:outline-none ease-in-out duration-200 hover:scale-110">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="rounded-full border-2 border-red-600 p-1"
                  />
                </button>
                <button className="text-xl mx-2 text-blue-500 hover:text-blue-900 focus:outline-none ease-in-out duration-200 hover:scale-110">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="rounded-full border-2 border-blue-700 p-1"
                  />
                </button>
              </div>
              <p className="text-center text-gray-500 m-2">
                Or {isLoginForm ? "Login" : "SignUp"} with email address
              </p>
            </div>

            {isLoginForm ? (
              <>
                <div className="flex flex-col m-3">
                  <label htmlFor="email">Email</label>
                  <input
                    className="px-2 py-1 m-1 outline-none rounded-md"
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    className="px-2 py-1 m-1 outline-none rounded-md"
                    placeholder="Password"
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col m-3">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    className="px-2 py-1 m-1 outline-none rounded-md"
                    placeholder="Full Name"
                    type="text"
                    name="fullName"
                    id="fullName"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <label htmlFor="">Email</label>
                  <input
                    className="px-2 py-1 m-1 outline-none rounded-md"
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="">Password</label>
                  <input
                    className="px-2 py-1 m-1 outline-none rounded-md"
                    placeholder="Password"
                    type="password"
                    name="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </>
            )}
            {isLoginForm ? (
              <>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 duration-200 mx-auto text-lg px-5 py-1 border-2 rounded-3xl text-white my-1"
                >
                  LogIn
                </button>

                <p className="text-gray-500 text-center m-4">
                  Not Registered Yet?{" "}
                  <button
                    type="button"
                    onClick={controlFormToggle}
                    className="text-blue-500 hover:text-blue-700 underline p-1"
                  >
                    SignUp
                  </button>
                </p>
              </>
            ) : (
              <>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 duration-200 mx-auto text-lg px-5 py-1 border-2 rounded-3xl text-white my-1"
                >
                  SignUp
                </button>

                <p className="text-gray-500 text-center m-4">
                  Already Registered?{" "}
                  <button
                    onClick={controlFormToggle}
                    type="button"
                    className="text-blue-500 hover:text-blue-700 underline p-1"
                  >
                    LogIn
                  </button>
                </p>
              </>
            )}
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginSignupPage;
