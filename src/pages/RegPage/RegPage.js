import React from "react";
import { Link } from "react-router-dom";
import "./RegPage.css"
import MainBox, { ButtonBox, BoxReg, TextBox, Content, InputBox, InputField, Input, EnterButton} from "./RegPageStyles";




class RegPage extends React.Component {
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
						<Input type = "text" placeholder="Введите e-mail"/>
					</InputField>
					<InputField>
						<Content>ПАРОЛЬ</Content>
						<Input type = "password" placeholder="Введите пароль"/>
					</InputField>
					<InputField>
						<Content>ПОВТОРИТЕ ПАРОЛЬ</Content>
						<Input type = "password" placeholder="Повторите пароль"/>
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


export default RegPage;