import styled, { css } from "styled-components";


const HeaderBox = styled.div`
  display: inline-flex;
  width: 100vw;
  height: 4rem;
  background: black;
  align-items: center;
  justify-content: space-evenly;
`;

const Logo = styled.img`
  display:flex;
  align-items:center;
  justify-content: space-evenly;
  width: 10rem;
  height: 3rem;
 
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
  text-decoration: none;
  background: #1B1B1B;
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
    background: #81B1A6;
    transition: 0.2s;
    cursor: pointer;
  }
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
  transition: 0.2s;

  color: #dadada;
  :hover {
    font-size: 18px;
    transition: 0.2s;
    cursor: pointer;
  }
`;

export default HeaderBox;
export {
  Logo,
  Navigation,
  NavigationButton,
  AccountArea,
  AccountButton,
  FavoriteButton,
  TrashButton
};
