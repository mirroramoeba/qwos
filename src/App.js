import './App.css';
import "./pages/Styles.css"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegPage from "./pages/RegPage/RegPage"
import { BrowserRouter as Router, Route, Link, Outlet } from "react-router-dom";

const App = () => [

    <div className='App'>
      <Outlet />
    </div>

]

export default App;