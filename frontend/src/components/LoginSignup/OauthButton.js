import React from "react";
import axios from "./../../axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setOauthToken } from "../../redux/oauthToken/actions";
import { setUser } from '../../redux/user/actions';
import { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";


function OauthButton(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setIsLoggedIn } = useContext(LoginContext);

  const handleOauthLogin = async (credentialResponse) => {
    console.log(credentialResponse);
    const oauthToken = credentialResponse.credential;
    console.log(oauthToken);
    dispatch(setOauthToken(oauthToken));
    try {
      const response = await axios.get("/userInfo", {
        headers: { Authorization: `Bearer ${oauthToken}` },
      });
      console.log(response);
      if (response) {
        const userName = response.data.decodedData.given_name;
        const Email = response.data.decodedData.email;
        const newUser = { username: userName, email: Email, status: true };
        dispatch(setUser(newUser));
        setIsLoggedIn(true);

        navigate("/dashboard");
      }
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
