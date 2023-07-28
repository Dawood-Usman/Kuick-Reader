import React from "react";
import GoogleIcon from "./../../assets/images/GoogleIcon.png";
import axios from "./../../axios";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

function OauthButton(props) {
  const handleOauthLogin = (credentialResponse) => {
    const oauthToken = credentialResponse.credentialResponse;
    localStorage.setItem("oauthToken", oauthToken);
    try {
      const response = axios.get("/userInfo", {
        headers: { Authorization: `Bearer ${oauthToken}` },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <GoogleOAuthProvider clientId="3670868246-pvlrlluc48ggmq84lrra5vcp2k349n7g.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleOauthLogin}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        {/* <div className="flex flex-row items-center p-px bg-blue-600 rounded">
          <img
            src={GoogleIcon}
            alt="Google Icon"
            className="w-8 bg-white rounded-sm inline mx-px"
          />
          <p className="text-center text-white px-3 py-1">
            {props.isLoginForm ? "Login" : "SignUp"} with Google
          </p>
        </div> */}
      </GoogleOAuthProvider>
    </>
  );
}

export default OauthButton;
