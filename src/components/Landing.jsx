import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import { ProductList } from "./ProductList";
import { NavList } from "./NavList";
import { Home } from "./Home";
import { CatList } from "./CatList";

export const Landing=()=>{
    return(
       <React.Fragment>
        <BrowserRouter>
        <NavList />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlist" element={<ProductList />} />
        
        </Routes>
        </BrowserRouter>
       </React.Fragment>
    )
}