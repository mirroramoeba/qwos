import styled, { css } from "styled-components";
import FavIcon from "../../img/favIcon.png";

const HeaderBox = styled.div`
  display: inline-flex;
  width: 100vw;
  height: 4rem;
  background: black;
  align-items: center;
  justify-content: space-evenly;
`;

const Logo = styled.div`
  display: flex;
  margin: 0.1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 10rem;
  height: 3.5rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  color: #dadada;
`;
const Navigation = styled.div`
  display: flex;
  width: 40rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
`;
const NavigationButton = styled.div`
  display: flex;
  margin: 0.1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 10rem;
  height: 3.5rem;
  background: #1b1b1b;
  transform-box: border-box;
  transform: skew(-15deg);
  transition: 0.2s;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  color: #dadada;

  :hover {
    background: #00fa9a;
    color: black;
    transition: 0.2s;
    cursor: pointer;
  }
`;
const Content = styled.div`
  margin-top: 100px;
  height: 300px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  color: black;
`;
const AccountArea = styled.div`
  display: flex;
  width: 15vw;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

const AccountButton = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: white;
`;
const FavoriteButton = styled.img`
  width: 2rem;
  height: 1.7rem;
  :hover {
    filter: brightness(70%);
    cursor: pointer;
  }
`;

const TrashButton = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  color: #dadada;
`;

export default HeaderBox;
export {
  Logo,
  Navigation,
  NavigationButton,
  Content,
  AccountArea,
  AccountButton,
  FavoriteButton,
  TrashButton
};
