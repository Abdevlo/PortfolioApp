import { Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import './App.css'
import overlay from './assets/overlay.svg'
import logo from './assets/logo.svg'

function StartingPage() {
    return (
        <Grid sx={{ backgroundColor: 'black', height: '100vh', justifyContent:'center', alignContent:'center', display:'flex' }}>
            <img src={logo} alt="logo" />
        </Grid>
    );
}

export default StartingPage
