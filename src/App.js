import Login from "./pages/login/Login";
import Regester from "./pages/regester/Regester"; // Fixed the typo in the import
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/regester" element={<Regester />} /> 
      </Routes>
    </Router>
  );
}

export default App;
