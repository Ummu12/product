import React from "react";
import { Grid,Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Navitem=({item})=>{
    return(
        <Grid item xs={item.xs}>
            <Link to={item.path}>
            <Button variant="contained" fullWidth  color="warning">
                {item.title}
            </Button>
            </Link>

        </Grid>
    )
}