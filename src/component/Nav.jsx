import React ,{useState}from "react";
import { Grid,Card,CardContent } from "@mui/material";
import { Navdata } from "../Data/Navdata";
import { Navitem } from "./Navitem";

export const Nav=()=>{
    const [data,setData]=useState(Navdata)
    return(
        <Card sx={{bgcolor:"lightsteelblue"}}>
            <CardContent>
                <Grid container spacing={2}>
                    {
                        data.map((item)=>
                    
                          <Navitem  item={item}/>
                         
                        )
                    }

                </Grid>
            </CardContent>
        </Card>
    )
}