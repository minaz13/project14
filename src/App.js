import React from "react";
import { Card,CardContent } from "@mui/material";
import { Landing } from "./components/Landing";
import "./components/common.css"

function App() {
  return (
    <Card sx={{bgcolor:"#ffe6e6"}}>
      <CardContent>
        <Landing />
      </CardContent>
    </Card>
  );
}

export default App;
