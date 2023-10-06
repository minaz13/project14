import React,{useState} from "react";
import { Grid } from "@mui/material";
import { NavData } from "./NavData";
import { NavItem } from "./NavItem";
 
export const NavList=()=>{
    const [data,setData]=useState(NavData)
    return(
      <Grid container spacing={3}>
       {
        data.map((item)=>
        <NavItem item={item} />
        
        )
       }
      </Grid>
    )
}