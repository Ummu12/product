import React, {useState,useEffect}from "react";
import { Card,CardContent,Grid } from "@mui/material";
import axios from "axios";
import { ProductItem } from "./ProductItem";


export const Product=()=>{
   const[data,setData]=useState([])

   const contPro= async()=>{
    const result = await axios.get("https://api.escuelajs.co/api/v1/products")
     setData(result.data)
   }

   useEffect(()=>{
           contPro()
   },[])

    return(
             <Grid container spacing={3}>
                {
                    data.map((item)=>
                    <Grid item xs={6}>
                        <ProductItem  item={item}/>
                    </Grid>
                    )
                }

             </Grid>

    )
}