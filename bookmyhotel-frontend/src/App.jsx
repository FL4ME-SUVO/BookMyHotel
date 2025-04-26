import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import LoginSignup from './components/Auth/AuthPage'; // Assuming you have this page (login/signup swipe)


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<LoginSignup />} /> */}
        {/* Optional: Future Expansion */}

      </Routes>
    </Router>
  );
}

export default App;
