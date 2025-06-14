
import './App.css';
import React from 'react';

import {
  Routes,
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import GoogleLoginApp from "./Components/GoogleLogin";
import MainApp from "./Components/MainApp";
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path={"/"} element={<GoogleLoginApp />} />
          <Route exact path="/login" element={<MainApp />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
