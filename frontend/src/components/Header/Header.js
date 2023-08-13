import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "../../axios";
import Logo from "./../../assets/images/logo.png";
import { useDispatch } from "react-redux";
import { deleteOauthToken } from "../../redux/oauthToken/actions";
import { deleteJwtToken } from "../../redux/jwtToken/actions";
import { deleteUser, setUser } from "../../redux/user/actions";
import { LoginContext } from "../../Contexts/LoginContext";


function Header() {
  const [isScaled, setIsScaled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsScaled((prevIsScaled) => !prevIsScaled);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const delJwtToken = async () => {
    dispatch(deleteJwtToken());
    const userNewState = { username: "",email: '', status: false };
    dispatch(deleteUser(userNewState));
    setIsLoggedIn(false);
  };

  const delOauthToken = async () => {
    dispatch(deleteOauthToken());
    const userNewState = { username: "", email: '', status: false };
    dispatch(deleteUser(userNewState));
    setIsLoggedIn(false);
  };

  const authMiddleware = async () => {
    const jwtToken = localStorage.getItem("jwtToken");
    const oAuthToken = localStorage.getItem("oauthToken");
    const currentTime = new Date().getTime() / 1000;

    console.log("jwtToken ", jwtToken);
    console.log("oAuthToken ", oAuthToken);

    if (jwtToken) {
      //if jwt token exist
      try {
        const decodedjwtToken = jwt_decode(jwtToken);
        console.log(decodedjwtToken);
        if (currentTime > decodedjwtToken.exp) {
          delJwtToken();
          //redirect to login page
          navigate("/login");
          console.log("redirect to login page");
        } else {
          //redirect to dashboard

          try {
            const response = await axios.get('/jwtInfo', {
              headers: { Authorization: `Bearer ${jwtToken}` },
            });
            const {Name, Email} = response.data;

            const user = { username: Name, email: Email , status: true };
            dispatch(setUser(user));
            setIsLoggedIn(true);
            navigate("/dashboard");
            console.log("redirect to dashboard");

          } catch (error) {
            console.log(error);
            return;
          }
        }
      } catch (error) {
        delJwtToken();
        //redirect to login page
        navigate("/login");
        console.log("redirect to login page");
      }
    } else if (oAuthToken) {
      //if oAuthToken token exist
      try {
        const response = await axios.get(
          `https://oauth2.googleapis.com/tokeninfo?id_token=${oAuthToken}`
        );
        console.log(response);
        if (response.status === 200) {
          console.log("googleOauth Verified");

          const userName = response.data.given_name;
          const Email = response.data.email;
          const user = { username: userName, email: Email, status: true };
          dispatch(setUser(user));
          setIsLoggedIn(true);

          navigate("/dashboard");
        } else {
          console.error("Failed to validate Google ID token:", response.status);
          delOauthToken();
          navigate("/login");
        }
      } catch (error) {
        console.log("Google Error: ", error);
        delOauthToken();
        navigate("/login");
      }
    } else {
      console.log("No Token, redirect to login page");
      navigate("/login");
    }
  };

  
  return (
    <>
      <div className="flex flex-wrap justify-between content-center w-full h-auto px-10 py-2 z-30">
        <div className="flex flex-col cursor-pointer m-0 p-0">
          <img
            className="w-8 h-fit self-center"
            src={Logo}
            alt="Kuick Reader Logo"
          />
          <h1 className=" text-lg">kuickReader</h1>
        </div>
        <ul className="flex flex-row flex-wrap cursor-pointer">
          <Link
            to="/"
            className="uppercase self-center mx-1 px-5 py-1 hover:text-orange-400 duration-200 ease-linear text-lg"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="uppercase self-center mx-1 px-5 py-1 hover:text-orange-400 duration-200 ease-linear text-lg"
            onClick={authMiddleware}
          >
            Dashboard
          </Link>
          <Link
            to="/about"
            className="uppercase self-center mx-1 px-5 py-1 hover:text-orange-400 duration-200 ease-linear text-lg"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="uppercase self-center mx-1 px-5 py-1 hover:text-orange-400 duration-200 ease-linear text-lg"
          >
            Contact
          </Link>
        </ul>
        <Link className="self-center" to="/login">
          <button
            className={`text-lg bg-green-400 h-fit px-5 py-0.5 border-2 rounded-2xl duration-500 ease-in-out   ${
              isScaled ? "scale-110" : ""
            }`}
            onClick={authMiddleware}
          >
            Login
          </button>
        </Link>
      </div>
    </>
  );
}

export default Header;
