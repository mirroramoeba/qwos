import styled, {css} from "styled-components";
import { Link } from "react-router-dom";

function showHidePassword(target){
	var input = document.getElementById('password-input');
	if (input.getAttribute('type') === 'password') {
		target.classList.add('view');
		input.setAttribute('type', 'text');
	} else {
		target.classList.remove('view');
		input.setAttribute('type', 'password');
	}
	return false;
}

const Container = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: start;
  pading: 20%;

`

const MainBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 50vmin; 
  height: 60vmin;
  
  position: absolute;
  top:-20%;bottom:0;
  left:0;right:0;
  margin: auto;  
  justify-content: right;

  background: #E0E0E0;
  border: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
`
const ButtonBox = styled.div`
  display: inline-flex;
  height: 10vh;
`
const TextBox = styled.div`
  display: inline-flex;
  width: 50vw;
  justify-content: center;
  align-items: center;
`
const Content = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 100%;
  line-height: 22px;

  letter-spacing: 1.5px;
  text-transform: uppercase;

  color: #000000;
  ${props => props.primary && css`
    color: white;
  `}
`

const BoxReg = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height:100%;
  width: 100%;
  background: #C4C4C4;
  border-left: 2px solid #000000;
  border-bottom: 2px solid #000000;
  box-sizing: border-box;
  border-radius: 0px 10px 0px 0px;
  transition: .2s;

  &:hover{
    background: #cfcfcf;
    transition: .2s;
  }
`

const InputBox = styled.div`
  display: flex;
  height: 92vh;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const InputField = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  width: 80%;
  height: 20%;
`

const Input = styled.input`
  background: #FFFFFF;

  
  height:55%;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 120%;
  line-height: 22px;
  border: 1px solid #333333;
  box-sizing: border-box;
  border-radius: 10px;
`

const EnterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 55%;
  width: 100%;

  background: #000000;
  border-radius: 10px;
`

export {BoxReg, ButtonBox, TextBox, Content, InputBox, InputField, Input, EnterButton, Container};
export default MainBox;