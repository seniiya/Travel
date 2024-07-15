import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import MainPage from './pages/MainPage'; // Ensure you have a MainPage component
import EmailSignupPage from './pages/EmailSignupPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path='/emailsignup' element={<EmailSignupPage/>}/>
        
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
