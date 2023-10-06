import React,{useState,useEffect} from "react";
import { Grid,Card,CardContent } from "@mui/material";
import { CatItem } from "./CatItem";
import axios from "axios";

export const CatList=({handleSelectedCat})=>{
   const [data,setData]=useState([]);

   const getData= async()=>{
       const result = await axios.get("https://fakestoreapi.com/products/categories");
       setData(result.data)
   }
   useEffect(()=>{
       getData()
   },[])

    return(
      <Card>
        <CardContent>
            <Grid container spacing={2}>
                {
                   data.map((item)=>
                      <CatItem  item={item} handleSelectedCat={handleSelectedCat}/>
                   )
                }

            </Grid>
        </CardContent>
      </Card>
    )
}