import './App.css';
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
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
