import { Route, Routes } from "react-router";
import Home from "./Home";
import FavList from "./FavList";

const Routers = () => {

    return (
        <div>
     <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/fav"  element={<FavList/>}/>

   </Routes> 
        </div>
    );
  };
  
  export default Routers;