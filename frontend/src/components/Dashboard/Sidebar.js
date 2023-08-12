import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteOauthToken } from '../../redux/oauthToken/actions';
import { deleteJwtToken } from '../../redux/jwtToken/actions';
import { deleteUser } from '../../redux/user/actions';
import { useContext } from "react";
import {LoginContext} from '../../Contexts/LoginContext'
import UploadFileIcon from "./../../assets/images/UploadFileIcon.png";
import HistoryIcon from "./../../assets/images/HistoryIcon.png";
import UserIcon from "./../../assets/images/UserIcon.png";
import LogoutIcon from "./../../assets/images/LogoutIcon.png";
import { useNavigate } from "react-router-dom";


function Sidebar({ onStateChange }) {
  const {setIsLoggedIn} = useContext(LoginContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("Upload File");
  const user = useSelector(state => state.user);

  const toggleToHistory = () => {
      const newState = "History";
      setSelectedOption(newState);
      onStateChange(newState);
    }
    
    const toggleToUploadFile = () => {
      const newState = "Upload File";
      setSelectedOption(newState);
      onStateChange(newState);
    };

    const handleLogout = () => {
      dispatch(deleteJwtToken());
      dispatch(deleteOauthToken());
      const newUserState = {username : '', status: false};
      dispatch(deleteUser(newUserState));
      setIsLoggedIn(false);
      navigate('/');
    }


  return (
    <div className="mt-1 hidden md:flex flex-col flex-wrap shadow-2xl w-[25%]">
      <p className="text-center font-bold text-2xl py-4">kuickReader.com</p>
          <button
            className={`text-white rounded-md m-3 text-md py-2 flex justify-center items-center w-[90%] 
          ${selectedOption === "Upload File" ? "bg-blue-700" : "bg-gray-400"}`}
            onClick={toggleToUploadFile}
          >
            <img
              src={UploadFileIcon}
              alt="Icon for Upload File"
              className="w-8 p-1"
            />
            <p className="mx-1">Upload File</p>
          </button>

          <button
            className={`text-white rounded-md m-3 text-md py-2 flex justify-center items-center w-[90%]
          ${selectedOption === "History" ? "bg-blue-700" : "bg-gray-400"}`}
            onClick={toggleToHistory}
          >
            <img
              src={HistoryIcon}
              alt="Icon for Upload File"
              className="w-8 p-1"
            />
            <p className="mx-1">History</p>
          </button>
      <button className="bg-gray-800 text-white rounded-md m-3 text-md py-2 flex justify-center w-[90%]items-center flex-wrap "
      onClick={handleLogout}>
        <img src={UserIcon} alt="Icon for Upload File" className="w-8 p-1" />
        <p className="mx-1">{user.username}</p>
        <img
          src={LogoutIcon}
          alt="Icon for Upload File"
          className="w-8 p-1 self-end"
        />
      </button>
    </div>
  );
}

export default Sidebar;
