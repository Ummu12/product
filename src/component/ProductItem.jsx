import React from "react";
import { Card,CardContent,Grid,Button } from "@mui/material";

export const ProductItem=({item})=>{
    return(
        <Card sx={{bgcolor:"lightsteelblue"}}>
            <CardContent>
                <Grid container spacing={2}>
                     
                <Grid item xs={4}>
                      <img src={item.images[0]} alt="" height={170}  width={170} />
                    </Grid>


                    <Grid item xs={4}>
                      <img src={item.images[1]} alt="" height={170}  width={170} />
                    </Grid>
                     

                    <Grid item xs={4}>
                      <img src={item.images[2]} alt="" height={170}  width={170} />
                    </Grid>



                     <Grid item xs={6}>
                     <h3>{item.title}</h3>
                     <span>{item.description.slice(0,30)+"..."}</span>
                    </Grid>

                  
                    

                    <Grid item xs={10}>
                     <Button variant="contained" >
                        {item.creationAt}
                     </Button>
                   
                     </Grid>
             
                </Grid>
           </CardContent>
     </Card>

    )
}