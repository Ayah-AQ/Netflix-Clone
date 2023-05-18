import { Route, Routes } from "react-router";
import Home from "./Home";

const Routers = () => {

    return (
        <div>
     <Routes>
    <Route path="/"  element={<Home/>}/>
   </Routes> 
        </div>
    );
  };
  
  export default Routers;