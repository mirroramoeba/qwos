import React from "react";
import { Link } from "react-router-dom";
import {
  setRegister,
  register,
  submitCheckin,
  changeInputRegister
} from "./register";
import MainBox, {
  ButtonBox,
  BoxReg,
  TextBox,
  Content,
  InputBox,
  InputField,
  Input,
  EnterButton,
  Container
} from "./RegPageStyles";

class RegPage extends React.Component {
  render() {
    return (
      <Container>
        <MainBox>
          <ButtonBox>
            <TextBox>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <BoxReg>
                  <Content>ВОЙТИ</Content>
                </BoxReg>
              </Link>
            </TextBox>
            <TextBox>
              <Content>Регистрация</Content>
            </TextBox>
          </ButtonBox>

          <InputBox onChange={submitCheckin}>
            <InputField>
              <Content>АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ</Content>
              <Input
                type="email"
                id="email"
                name="email"
                /*value={setRegister.email}*/
                onChange={changeInputRegister}
                formnovalidate
                placeholder="Введите e-mail"
              />
            </InputField>
            <InputField>
              <Content>ПАРОЛЬ</Content>
              <Input
                type="password"
                id="password"
                name="password"
                /*value={setRegister.password}*/
                onChange={changeInputRegister}
                placeholder="Введите пароль"
              />
            </InputField>
            <InputField>
              <Content>ПОВТОРИТЕ ПАРОЛЬ</Content>
              <Input
                type="password"
                id="password2"
                name="password2"
                /*value={setRegister.password2}*/
                onChange={changeInputRegister}
                placeholder="Повторите пароль"
              />
            </InputField>
            <InputField>
              <EnterButton type="submit" />
            </InputField>
          </InputBox>
        </MainBox>
      </Container>
    );
  }
}

export default RegPage;
