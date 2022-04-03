import React, { Component } from "react";
import { Link } from "react-router-dom";
import HeaderBox, {
  Logo,
  Navigation,
  NavigationButton,
  AccountArea,
  AccountButton,
  FavoriteButton,
  TrashButton
} from "./HeaderStyles";
import FavIcon from "../../img/favIcon.png";
import baseLogo1 from "../../img/SVG/baseLogo1.svg";
import graffityLogo from "../../img/SVG/graffityLogo.svg";
import catalog from "../../img/SVG/catalog.svg";

class Header extends Component {
  render() {
    return (
      <HeaderBox>
        <Link to="/main" style={{ textDecoration: "none"}}>
          <Logo src={graffityLogo}/>
        </Link>
        <Navigation>
          <Link to="/catalog" style={{ textDecoration: "none" }}>
            <NavigationButton>КАТАЛОГ</NavigationButton>
          </Link>
          <Link to="/designers" style={{ textDecoration: "none" }}>
            <NavigationButton>ДИЗАЙНЕРЫ</NavigationButton>
          </Link>
          <Link to="/sales" style={{ textDecoration: "none" }}>
            <NavigationButton>АКЦИИ</NavigationButton>
          </Link>
          <Link to="/questions" style={{ textDecoration: "none" }}>
            <NavigationButton>ВОПРОСЫ</NavigationButton>
          </Link>
        </Navigation>
        <AccountArea>
          <TrashButton>123.45$</TrashButton>
          <FavoriteButton src={FavIcon}></FavoriteButton>
          <AccountButton></AccountButton>
        </AccountArea>
      </HeaderBox>
    );
  }
}

export default Header;
