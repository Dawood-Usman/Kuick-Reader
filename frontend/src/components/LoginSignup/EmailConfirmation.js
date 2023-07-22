import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./../../components/custom.css";
import axios from "./../../axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmailConfirmation() {
  const navigate = useNavigate();
  const [userCode, setCode] = useState("");
  const { email, userJWT } = useLocation().state;

  const handleVerify = async () => {
    try {
      const response = await axios.post("/verify", { userCode, userJWT });
      if (response.status === 200) {
        notify(response.data.SuccessMsg);
        setTimeout(() => {
          navigate("/login", {
            state: {
              email,
              userJWT,
            },
          });
        }, 2000); // 2 seconds delay before redirection
      }
    } catch (error) {
      notify(error.response.data.ErrorMsg);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCode !== "") {
      handleVerify();
    }
  };

  const notify = (msg) => toast(msg);

  return (
    <div className="flex flex-col flex-wrap justify-center items-center max-w-screen h-screen overflow-hidden">
      <div
        style={{}}
        className="md:w-[450px] bgForm flex flex-col p-5 flex-wrap h-96  rounded-xl items-center"
      >
        <h1 className="text-700 font-bold text-xl p-5 mb-5">
          Verify Your Account
        </h1>
        <p className="leading-tight text-gray-500 mb-7 text-center capitalize">
          Please Enter the Verification code That we sent to{" "}
          <span className="font-bold lowercase text-black">{email}</span> in
          order to activate your account.
        </p>
        <input
          type="text"
          required
          value={userCode}
          onChange={(e) => {
            setCode(e.target.value);
          }}
          className="outline-none px-2 py-1 w-[70%] mb-2 border-b-2 border-r-2 border-gray-400"
        />
        <button
          className="bg-red-700 w-32 py-1 cursor-pointer text-white m-2 hover:bg-red-900 duration-200 ease-in-out rounded-sm"
          onClick={handleSubmit}
        >
          Verify
        </button>
        <p className="mt-6 text-gray-500">
          Not Received?
          <button
            className=" px-2 duration-200 font-bold text-black hover:text-gray-500"
            type="submit"
          >
            Resend Code
          </button>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default EmailConfirmation;
