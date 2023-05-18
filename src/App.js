import "./rest.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
// Imgs


//styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle} from "./Components/Style/Style";
//components

import Routers from './Components/Routers';
import NavBar from './Components/Navbar/Navbar';

//Dark&Light Theme
const theme = {
  light: {
    mainColor:"black",
  backgroundColor:"rgba(212, 212, 212, 0.55)",
},
 
  dark: {
    mainColor: "white",
    backgroundColor:"#231e23",
  },
};
// Code
function App() {
  //Theme
  const [currentTheme, setCurrentTheme] = useState("light");
  const ToggleCurrentTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  
         return (    
        //theme --------------------------
          <ThemeProvider theme={theme[currentTheme]}>
          <GlobalStyle />  
          
         {/*NavBar-------------------------------------------------------*/}
         <NavBar currentTheme={currentTheme} ToggleCurrentTheme={ToggleCurrentTheme} />
        <Routers/>
     
         </ThemeProvider>
     
 )};

export default App ;