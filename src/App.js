import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import MainPage from './pages/MainPage'; // Ensure you have a MainPage component
import FindIdPage from './pages/FindIdPage';
import FindPwPage from './pages/FindPwPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path='/findid' element={<FindIdPage/>}/>
        <Route path='/findpw' element={<FindPwPage/>}/>
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
