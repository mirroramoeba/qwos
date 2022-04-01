import styled, {css} from "styled-components";
import FavIcon from '../../img/favIcon.png';



const HeaderBox = styled.div`
  display: inline-flex;
  width: 100vw;
  height: 60px;
  background: black;
  align-items:center;
  justify-content:space-around;

`
const Logo = styled.div`
  height:65%;
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 1.5px;
  text-transform: uppercase;

  color: #DADADA;
`
const Navigation = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const NavigationButton = styled.div`
  display: flex;
  margin: 2px;
  justify-content: center;
  align-items: center;
  width: 10vw;
  height: 92%;
  background: #1B1B1B;
  transform: skew(-15deg);
  transition: .2s;

  :hover{
    background: #2D2D2D;
    transition: .2s;
    cursor: pointer;
  }
`
const Content = styled.div`
  padding:10%;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  transform: skew(15deg);
  letter-spacing: 1.5px;

  color: #DADADA;
`
const AccountArea = styled.div`
  display:flex;
  width: 30vw;
  height:100%;
  justify-content: left;
  align-items: center;
`

const AccountButton = styled.div`
  width: 3vw;
  height: 3vw;
  border-radius:50%;
  background:white;
`
const FavoriteButton = styled.img`
  width: 3vw;
  height:2.5vw;
  :hover{
    filter: brightness(70%);
    cursor: pointer;
  }
`

const TrashButton = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  color: #DADADA;
`


export default HeaderBox;
export {Logo, Navigation, NavigationButton, Content, AccountArea, AccountButton, FavoriteButton, TrashButton};