import './App.css';
import "./pages/Styles.css"
import LoginPage from "./pages/LoginPage"
import RegPage from "./pages/RegPage"
import { BrowserRouter as Router, Route, Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className='App'>
      <LoginPage/>
      <Outlet />
    </div>
  );
}