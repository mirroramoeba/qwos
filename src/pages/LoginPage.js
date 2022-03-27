import React from "react";
import "./Styles.css"
import { Link, Outlet } from "react-router-dom";

class LoginPage extends React.Component {
	render() {		
		return (
			<div className="box">
				<div style={{width: 76.17, height: 23.9, left: 104.18, top: 27.05}} className="text">ВОЙТИ</div>
				<Link to="/registration" className="boxReg">
					<div style={{width: 157.28, height: 24.04, right: 63.11, top: 28.05}} className="text">РЕГИСТРАЦИЯ</div>
				</Link>
				<div style={{width: 444, height: 70, left: 61, top: 167}} className="inputField">
					<div style={{width: 76, height: 22, left: 0, bottom: 79}} className="text">ЛОГИН</div>
				</div>
				<div style={{width: 444, height: 70, left: 61, top: 324}} className="inputField">
					<div style={{width: 76, height: 22, left: 0, bottom: 79}} className="text">пароль</div>
				</div>
				<div style={{width: 444, height: 79.3, left: 61, bottom: 90}} className="enterButton">
					<div style={{height: 29, width: 100, left: 172, top: 25}} className="textButton">ВОЙТИ</div>
				</div>
			</div>
		);
	}
}

export default LoginPage;