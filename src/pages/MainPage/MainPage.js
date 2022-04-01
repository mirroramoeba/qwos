import React, {Component} from "react";
import { Link } from "react-router-dom";
import HeaderBox, {Logo, Navigation, NavigationButton, Content, AccountArea, AccountButton, FavoriteButton, TrashButton} from"./MainPageStyles"
import FavIcon from '../../img/favIcon.png';


class MainPage extends Component{
  render(){
    return(
      <HeaderBox>
        <Logo>Qwos</Logo>
        <Navigation>
          <NavigationButton><Content>КАТАЛОГ</Content></NavigationButton>
          <NavigationButton><Content>ДИЗАЙНЕРЫ</Content></NavigationButton>
          <NavigationButton><Content>АКЦИИ</Content></NavigationButton>
          <NavigationButton><Content>ВОПРОСЫ</Content></NavigationButton>
        </Navigation>
        <AccountArea>
          <TrashButton>
            123.45$
          </TrashButton>
          <FavoriteButton src={FavIcon}></FavoriteButton>
          <AccountButton>
          </AccountButton>
        </AccountArea>
      </HeaderBox>
    );
  }
}

export default MainPage;