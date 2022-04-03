import styled, { css } from "styled-components";

const Text = styled.div`
font-family: "Montserrat";
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 20px;
text-align: center;
letter-spacing: 1px;

color: #000000;
`

const FooterBox = styled.div`
  display: flex;
  flex-flow: column;
  background: lightgrey;
  width: 100 wv;
  height: 20rem;
  justify-content: space-around;
`;

const FooterInfoBlock = styled.div`
  display: inline-flex;
  justify-content: space-around;
  height: 80%;
`;
// начало левого
const ContentBlock = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: left;
`;

const ContentBlockTitle = styled.div`
  width: 90%;
  height: 10%;
`;
const Help = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HelpPart = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-flow: column;
  padding-right: 3rem;
  padding-right: ${(props) => props.right === 'right' ? '0' : '5rem'};
  padding-left: ${(props) => props.right === 'right' ? '5rem' : '0' };
  
`;



const Country = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
`;

const Flag = styled.img`
  display:flex;
  align-items:center;
  justify-content: space-evenly;
  width: 3rem;
  height: 2rem;
`
const Social = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.img`
display:flex;
align-items:center;
justify-content: space-evenly;
width: 2rem;
height: 2rem;

padding: 0 1rem ;
`
// конец левого
// начало правого
const FooterUnderText = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 10%;
  width: 100%;
`;

export default FooterBox;
export {
  FooterInfoBlock,
  ContentBlock,
  ContentBlockTitle,
  Help,
  HelpPart,
  Country,
  Social,
  FooterUnderText,
  Text,
  Flag,
  Icon
};
