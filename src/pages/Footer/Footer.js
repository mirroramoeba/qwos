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
  FooterUnderText
} from "./FooterStyles";

class Footer extends Component {
  render() {
    return (
      <FooterBox>
        <FooterInfoBlock>
          <ContentBlock>
            <ContentBlockTitle>Помощь</ContentBlockTitle>
            <Help>
              <HelpPart>
                <Link to="/main">Как оформить заказ</Link>
                <Link to="/main">Мои Заказы</Link>
                <Link to="/main">Условия доставки</Link>
              </HelpPart>
              <HelpPart>
                <Link to="/main">Возврат</Link>
                <Link to="/main">Публичная Оферта</Link>
                <Link to="/main">Часто задаваемые вопросы</Link>
              </HelpPart>
            </Help>
            <Country>
              <div>БСК</div>
              <div>Россия</div>
              <Link to="/main">Сменить Страну</Link>
            </Country>
            <Social>
              <Link to="/main">ТТ</Link>
              <Link to="/main">Inst</Link>
              <Link to="/main">VK</Link>
            </Social>
          </ContentBlock>
          <ContentBlock>
            <ContentBlockTitle>Для мобильных устройств</ContentBlockTitle>
            <Help>
              <HelpPart>
                <Link to="/main">AppStore</Link>
              </HelpPart>
              <HelpPart>
                <Link to="/main">GooglePlay</Link>
              </HelpPart>
            </Help>
            <Link to="/main">
              Вы также можете перейти на мобильную версию сайта
            </Link>
            <Country>
              <Link to="/main">MИP</Link>
              <Link to="/main">Master</Link>
              <Link to="/main">Visa</Link>
              <Link to="/main">PayPal</Link>
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
