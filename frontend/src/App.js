import "./App.css";
import EmailConfirmation from "./components/LoginSignup/EmailConfirmation";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import LoginSignupPage from "./pages/LoginSignupPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import NoMatch from "./components/NoMatch/NoMatch";
import { LoginContext } from "./Contexts/LoginContext";
import { useState } from "react";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginSignupPage />} />
            <Route path="/verification" element={<EmailConfirmation />} />
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="*" element={<NoMatch />}></Route>
          </Routes>
        </LoginContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
