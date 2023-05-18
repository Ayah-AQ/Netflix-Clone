import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";



export const Logo = styled(Link)`
  padding: 0.8em 0.5em;
  img {
    width: 12rem;
}
margin-right: 60%
`;

export const NavItem = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  padding: 0.25em 1em;
   &.active {
    color:red;
    background-color:rgba(255, 0, 0, 0.05);
  }

`;
export const ThemeButton = styled.div`
  font-size: 1em;
  padding: 0.25em 1em;
//   border-radius: 3px;
backgroundColor: "transparent" ;

`;
export const Mood = styled.img`
heigh :2.5vh;
width: 2.5vw ;

`;
