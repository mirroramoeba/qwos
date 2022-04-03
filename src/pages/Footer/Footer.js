import React, { Component } from "react";
import { Link } from "react-router-dom";
import FooterBox, {
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
} from "./FooterStyles";

import Rus from "../../img/SVG/rus.svg"
import TT from "../../img/SVG/TikTok.svg"
import Inst from "../../img/SVG/Instagram.svg"
import YouTube from "../../img/SVG/YouTube.svg"
import Pinterest from "../../img/SVG/Pinterest.svg"
import Mail from "../../img/SVG/mail.svg"


class Footer extends Component {
  render() {
    return (
      <FooterBox>
        <FooterInfoBlock>
          <ContentBlock>
            <ContentBlockTitle>Помощь</ContentBlockTitle>
            <Help>
              <HelpPart>
                <Link to="/main" style={{textDecoration: "none"}}><Text>Как оформить заказ</Text></Link>
                <Link to="/main" style={{textDecoration: "none"}}><Text>Мои Заказы</Text></Link>
                <Link to="/main" style={{textDecoration: "none"}}><Text>Условия доставки</Text></Link>
              </HelpPart>
              <HelpPart right = 'right'>
                <Link to="/main" style={{textDecoration: "none"}}><Text>Возврат</Text></Link>
                <Link to="/main" style={{textDecoration: "none"}}><Text>Публичная Оферта</Text></Link>
                <Link to="/main" style={{textDecoration: "none"}}><Text>Часто задаваемые вопросы</Text></Link>
              </HelpPart>
            </Help>
            <Country>
              <Flag src={Rus}></Flag>
              <div>Россия</div>
              <Link to="/main" style={{textDecoration: "none"}}><Text>Сменить Страну</Text></Link>
            </Country>
            <Social>
              <Link to="/main" style={{textDecoration: "none"}}><Icon src={TT}></Icon></Link>
              <Link to="/main" style={{textDecoration: "none"}}><Icon src={Inst}></Icon></Link>
              <Link to="/main" style={{textDecoration: "none"}}><Icon src={YouTube}></Icon></Link>
              <Link to="/main" style={{textDecoration: "none"}}><Icon src={Pinterest}></Icon></Link>
              <Link to="/main" style={{textDecoration: "none"}}><Icon src={Mail}></Icon></Link>
            </Social>
          </ContentBlock>
          <ContentBlock>
            <ContentBlockTitle>Для мобильных устройств</ContentBlockTitle>
            <Help>
              <HelpPart>
                <Link to="/main" style={{textDecoration: "none"}}><Text>AppStore</Text></Link>
              </HelpPart>
              <HelpPart>
                <Link to="/main" style={{textDecoration: "none"}}><Text>GooglePlay</Text></Link>
              </HelpPart>
            </Help>
            <Link to="/main" style={{textDecoration: "none"}}>
            <Text>Вы также можете перейти на мобильную версию сайта</Text>
            </Link>
            <Country>
              <Link to="/main" style={{textDecoration: "none"}}><Text>MИP</Text></Link>
              <Link to="/main" style={{textDecoration: "none"}}><Text>Master</Text></Link>
              <Link to="/main" style={{textDecoration: "none"}}><Text>Visa</Text></Link>
              <Link to="/main" style={{textDecoration: "none"}}><Text>PayPal</Text></Link>
            </Country>
          </ContentBlock>
        </FooterInfoBlock>

        <FooterUnderText>
          <div>копирайтед КВОС</div>
          <div>Нам похуй че там как главное одежда чтоб красивая </div>
        </FooterUnderText>
      </FooterBox>
    );
  }
}
export default Footer;
