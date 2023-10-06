import React from "react";
import { Grid,Card,CardContent,Rating } from "@mui/material";

export const ProductItem=({item})=>{
    return(
        <Grid item xs={4} align="center" >
           <Card sx={{height:"450px"}}>
            <CardContent>
                <h4>{item.title.slice(0,30)}...</h4>
                <h6>{item.description.slice(0,100)}</h6>
                <img src={item.image} alt="" />
                <h2>{item.category}</h2>
                <Rating value={item.rating.rate} /> ({item.rating.count})
            </CardContent>
           </Card>

        </Grid>
    )
}