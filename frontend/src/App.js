import "./App.css";
import EmailConfirmation from "./components/LoginSignup/EmailConfirmation";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import LoginSignupPage from "./pages/LoginSignupPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginSignupPage />} />
          <Route path="/verification" element={<EmailConfirmation />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
