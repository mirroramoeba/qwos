import React from "react";
import "./Styles.css"
import { Link, Outlet } from "react-router-dom";

class RegPage extends React.Component {
	state = {
		firstName: "",
		firstNameError: "",
	};

	validateName = name => {
		const regex = /[A-Za-z0-9А-Яа-я]{3,}/;

		return !regex.test(name)
		? "The name must contain at least three letters. Special characters are not allowed."
		: "";

	};

	onFirstNameBlur = () => {
		const {firstName} = this.state;
		const firstNameError = this.validateName(firstName);
		return this.setState({firstNameError});
	};

	onFirstNameChange = event =>
		this.setState({
				firstName: event.target.value
		});

	render() {
		const { firstNameError, firstName } = this.state;
		
		return (
			<div className="box">
				<Link to="/login" className="boxLog">
					<div style={{width: 76.17, height: 23.9, left: 104.18, top: 28.05}} className="text">ВОЙТИ</div>
				</Link>
				<div style={{width: 157.28, height: 24.04, right: 63.11, top: 27.05}} className="text">РЕГИСТРАЦИЯ</div>
				<div style={{width: 444, height: 70, left: 61, top: 167}} className="inputField">
					<div style={{width: 76, height: 22, left: 0, bottom: 79}} className="text">E-MAIL</div>
				</div>
				<div style={{width: 444, height: 70, left: 61, top: 324}} className="inputField">
					<div style={{width: 76, height: 22, left: 0, bottom: 79}} className="text">пароль</div>
				</div>
				
			</div>
		);
	}
}

export default RegPage;