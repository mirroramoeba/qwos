import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css"
import MainBox, { ButtonBox, BoxReg, TextBox, Content, InputBox, InputField, Input, EnterButton, PasswordControl} from "./LoginPageStyles";

class LoginPage extends Component {
	constructor() {
		super();
		this.state={
			showPassword: false,
		};
	}


	render() {
		return (
			<MainBox>

				<ButtonBox>
					<TextBox>
						<Content>ВОЙТИ</Content>
					</TextBox>
					<TextBox>
						<Link to="/registration" className="linkStyle">
							<BoxReg>
								<Content>РЕГИСТРАЦИЯ</Content>
							</BoxReg>
						</Link>
					</TextBox>					
				</ButtonBox>
				
				<InputBox>
					<InputField>
						<Content>ЛОГИН</Content>
						<Input type = "text" placeholder="Введите логин"/>
					</InputField>
					<InputField>
						<Content>ПАРОЛЬ</Content>
						<Input password type = {this.state.showPassword ? "text" : "password"} placeholder="Введите пароль"/>
						<PasswordControl onClick={() => this.setState({showPassword: !this.state.showPassword})}>
							{this.state.showPassword ? <Content primary1>Скрыть пароль</Content> : <Content primary1>Показать пароль</Content>}
						</PasswordControl>
						
					</InputField>

					<InputField>	
						<EnterButton>
							<Content primary>ВОЙТИ</Content>
						</EnterButton>
					</InputField>
				</InputBox>

			</MainBox>	
		);
	}
}

export default LoginPage;