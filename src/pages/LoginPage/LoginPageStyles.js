import styled, { css } from "styled-components";
const Container = styled.div`
  display: flex;
  width: 40rem;
  height: 40rem;
  margin: auto;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: top;
`;
const MainBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 22rem;
  height: 23rem;

  background: #e0e0e0;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
`;
const ButtonBox = styled.div`
  display: inline-flex;
  height: 5rem;
`;
const TextBox = styled.div`
  display: inline-flex;
  width: 22rem;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: 1.5px;
  text-transform: uppercase;

  color: #000000;
  ${(props) =>
    props.primary &&
    css`
      color: white;
    `}
  ${(props) =>
    props.primary1 &&
    css`
      letter-spacing: 1px;
      font-size: 10px;
      color: rgb(90, 90, 90);
      &:hover {
        cursor: pointer;
      }
    `}
`;
const BoxReg = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 11rem;
  background: #c4c4c4;
  border-left: 2px solid #000000;
  border-bottom: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 0px 10px 0px 0px;
  transition: 0.2s;

  &:hover {
    background: #cfcfcf;
    transition: 0.2s;
  }
`;
const InputBox = styled.div`
  display: flex;
  height: 50rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const InputField = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 17rem;
  height: 4rem;
`;

const Input = styled.input`
  background: #ffffff;

  height: 4rem;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  border: 1px solid #333333;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
`;
const EnterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 17rem;
  border: none;
  &:hover {
    cursor: pointer;
    background: #595959;
  }

  background: #000000;
  border-radius: 10px;
`;
const PasswordControl = styled.button`
  display: inline-flex;
  justify-content: left;
  height: 0%;
  width: 57%;
  border: 0;
  background: transparent;
`;
export {
  BoxReg,
  ButtonBox,
  TextBox,
  Content,
  InputBox,
  InputField,
  Input,
  EnterButton,
  PasswordControl,
  Container
};
export default MainBox;
