import React, { useContext } from "react";
import EmailConfirmation from "../components/LoginSignup/EmailConfirmation";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import LoginSignupPage from "../pages/LoginSignupPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import NoMatch from "../components/NoMatch/NoMatch";
import { LoginContext } from "../Contexts/LoginContext";
import { useSelector } from "react-redux";
import About from "../components/About/About";


function RouteProvider() {
    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext);
    setIsLoggedIn(useSelector(state => state.user.status))

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={!isLoggedIn ? <LoginSignupPage /> : <Dashboard />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <LoginSignupPage />}
        />
        <Route path="/verification" element={<EmailConfirmation />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteProvider;
