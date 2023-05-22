import styled from "styled-components";
import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
display: flex;
align-items: center;
  text-align: center;
 justify-content:space-between;
 padding-top: 40px ;
h1{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
 
}
body {
  background-color:${(props) => props.theme.backgroundColor};
  align-items: center;
  text-align: center;
 justify-content:space-between;
 flex-direction: column;
}


`
  export const List= styled.div`
  gap:30px;
  
  align-items:  center;
      text-align: center;
     display:flex;
     justify-content:space-between;
     padding-top: 90px ;
     ` 
     
     export const ListWrapper = styled.div`
     align-items: center;
     justify-content: center;
     display: flex;
     `;
     export const ListM = styled.div`
    margin-left: 5vw;
    margin-right: 5vw;
     `;