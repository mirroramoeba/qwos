import React from "react";
import "../Styles.css"
import { Link } from "react-router-dom";
import "./RegPage.css"
import MainBox, { ButtonBox, BoxReg, TextBox, Content, InputBox, InputField, Input, EnterButton, Container} from "./RegPageStyles";






class LoginPage extends React.Component {
	render() {
		return (


				<MainBox>

					<ButtonBox>
						<TextBox>
							<Link to="/login" className="linkStyle">
									<BoxReg>
										<Content>ВОЙТИ</Content>
									</BoxReg>
							</Link>
						</TextBox>
						<TextBox>
							<Content>Регистрация</Content>
						</TextBox>				
					</ButtonBox>
					
					<InputBox>
						<InputField>
							<Content>АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ</Content>
							<Input type = "text"/>
						</InputField>
						<InputField>
							<Content>ПАРОЛЬ</Content>
							<Input type = "password"></Input>
						</InputField>
						<InputField>
							<Content>ПОВТОРИТЕ ПАРОЛЬ</Content>
							<Input type = "password"></Input>
						</InputField>
						<InputField>	
							<EnterButton>
								<Content primary>ЗАРЕГИСТРИРОВАТЬСЯ</Content>
							</EnterButton>
						</InputField>
					</InputBox>

				</MainBox>	


		);
	}
}


export default LoginPage;