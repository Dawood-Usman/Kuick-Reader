import './App.css';
import EmailConfirmation from './components/LoginSignup/EmailConfirmation';
import LandingPage from './pages/LandingPage';
import LoginSignupPage from './pages/LoginSignupPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/verification" element={<EmailConfirmation />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
