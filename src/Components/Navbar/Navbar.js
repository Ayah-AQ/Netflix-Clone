import { Logo,Mood,NavItem, ThemeButton } from "./NavbarStyle";
import light from "../../Img/netflixLogo.png"
import dark from "../../Img/darkLogo.png"
import lightM from "../../Img/lMood.png"
import darkM from "../../Img/dMood.png"

const NavBar = ({ currentTheme, ToggleCurrentTheme }) => {

  return (
   <nav className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img src={currentTheme === "light" ? light :dark} alt="logo" />
      </Logo>  
      <div className="navbar-nav ml-auto">
        

          <>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/fav">Favorites</NavItem>        </>
      
        <ThemeButton className="nav-item" type="button" onClick={ToggleCurrentTheme}>
        <Mood  src={currentTheme === "light" ? darkM:lightM} alt="mood" />
         </ThemeButton>
      </div>
    </nav>
  )};

export default NavBar;