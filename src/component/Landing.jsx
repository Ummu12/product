import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "./Home";
import { Counter } from "./Counter";
import { Nav } from "./Nav";
import { Product } from "./Product";


export  const Landing=()=>{
    return(
        <BrowserRouter>
        <Nav />
        <br />
        <br />
               <Routes>
                <Route  path="/"   element={<Home />}/>
                <Route  path="/counter"  element={<Counter />}   />
                <Route  path="/product" element={<Product />}  />
               </Routes>
        </BrowserRouter>
    )
}