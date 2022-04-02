import styled, { css } from "styled-components";

const FooterBox = styled.div`
  display: flex;
  flex-flow: column;

  background: lightgrey;
  width: 100 wv;
  height: 20rem;
  justify-content: center;
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
  justify-content: space-between;
  align-items: left;
`;

const ContentBlockTitle = styled.div`
  width: 90%;
  height: 10%;
`;
const Help = styled.div`
  display: flex;
  width: 100%;
  height: 60%;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
`;
const HelpPart = styled.div`
  height: 30%;
  width: 45%;
  display: flex;
  justify-content: space-around;
  flex-flow: column;
`;

const Country = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Social = styled.div`
  display: flex;
  justify-content: center;
`;
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
  FooterUnderText
};
