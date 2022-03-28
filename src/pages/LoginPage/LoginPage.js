import React from "react";
import "../Styles.css"
import { Link } from "react-router-dom";
import "./LoginPage.css"
import MainBox, { ButtonBox, BoxReg, TextBox, Content, InputBox, InputField, Input, EnterButton, Container} from "./LoginPageStyles";






class LoginPage extends React.Component {
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
							<Input type = "text"/>
						</InputField>
						<InputField>
							<Content>ПАРОЛЬ</Content>
							<Input type = "password"></Input>
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