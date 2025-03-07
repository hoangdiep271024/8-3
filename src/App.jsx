import { useState } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import FirstScreen from './FirstScreen';
import Auth from './Auth'
function App() {
  return(
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<FirstScreen />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  )
}

export default App
