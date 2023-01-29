import HomePage from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.js";

export default function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          user 
          ? <HomePage /> 
          : <Register />}/>
        <Route path="/login" element={
          user 
          ? <Navigate to="/" /> 
          : <Login />} />
        <Route path="/register" element={
          user 
          ? <Navigate to="/" /> 
          : <Register />} />
        <Route path="/profile/:username" element={
          <Profile />
        } />
      </Routes>
    </Router>
  )
}
