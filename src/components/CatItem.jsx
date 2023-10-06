import React from "react";
import { Grid,Button } from "@mui/material";

 export const CatItem=({item ,handleSelectedCat})=>{
    return(
       <Grid item xs={3}>
         <Button onClick={()=>handleSelectedCat(item)} variant="contained" fullWidth color="secondary">{item}</Button>
       </Grid>
    )
}