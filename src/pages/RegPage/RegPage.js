import React from "react";
import { Link } from "react-router-dom";
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

          <InputBox>
            <InputField>
              <Content>АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ</Content>
              <Input
                placeholder="Введите e-mail"
              />
            </InputField>
            <InputField>
              <Content>ПАРОЛЬ</Content>
              <Input
                placeholder="Введите пароль"
              />
            </InputField>
            <InputField>
              <Content>ПОВТОРИТЕ ПАРОЛЬ</Content>
              <Input
                placeholder="Повторите пароль"
              />
            </InputField>
            <InputField>
              <EnterButton>зарегистрироваться</EnterButton>
            </InputField>
          </InputBox>
        </MainBox>
      </Container>
    );
  }
}

export default RegPage;
