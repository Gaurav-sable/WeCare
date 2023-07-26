import react from 'react';
import { Link } from 'react-router-dom';
import { Container, Input, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import '../App.css'
import docppl from '../components/docppl.jpeg'
import watch from '../components/watchimg.jpeg'
const Header = () => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <AppBar>
                <header className='head' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ width: "15%", display: "flex", justifyContent: "left" }}>
                        <h1 style={{ paddingLeft: "70px", color: "black" }}>WeCare</h1>
                    </div>
                    <Grid style={{ width: "60%", display: "flex", direction: "row", justifyContent: "space-around", alignItems: "center", marginRight: "60px", }}>
                        <Link className="links"><h3 style={{ fontWeight: "normal" }}>Home</h3></Link>
                        <Link className="links"><h3 style={{ fontWeight: "normal" }}>About</h3></Link>
                        <Link className="links"><h3 style={{ fontWeight: "normal" }}>News and Media</h3></Link>
                        <Link className="links"><h3 style={{ fontWeight: "normal" }}>Contact us</h3></Link>
                        <h3><Button sx={{ ":hover": { bgcolor: "#68b9f1", color: "black" }, backgroundColor: "#03355A", color: "white" }} style={{ borderRadius: 15, padding: "15px", fontWeight: "bold", fontSize: "15px" }}>Check your Health</Button></h3>
                    </Grid>
                </header>
            </AppBar>
            <Grid className="content" direction={'column'}>
                <div>
                    <h1 className="forfont" style={{ color: '#03355A' }}>Self Care <br /> &nbsp; &nbsp; &nbsp; Isn't Selfish</h1>
                </div>
                <Grid direction={'row'} style={{ width: "30%", display: "flex", justifyContent: "space-between" }}>
                    <Button variant="outlined" sx={{ ":hover": { color: "white", bgcolor: "#03355A" }, color: "#03355A", backgroundColor: "white" }} style={{ width: "14vw", height: "7vh", borderColor: "#03355A", borderRadius: 15 }} >Contained</Button>
                    <Button variant="outlined" sx={{ ":hover": { color: "white", bgcolor: "#03355A" }, color: "#03355A", backgroundColor: "white" }} style={{ width: "14vw", height: "7vh", borderColor: "#03355A", borderRadius: 15 }} >Outlined</Button>
                </Grid>
            </Grid>
            <Grid direction={'column'}>

                <Grid direction={'row'} display="flex" justifyContent={"center"} style={{ backgroundColor: "rgb(0 0 0 / 8%)", marginTop: "10px", borderRadius: 10 }}>
                    <Grid direction={"column"} width={"50%"} style={{display : "flex", justifyContent : "center", alignItems: "center"}}>
                        <img className="docppl" src={docppl} alt="" />
                        <img className="watch" src={watch} alt="" />
                        {/* <h1>Hello</h1> */}
                    </Grid>
                    <Grid direction={"column"} width={"50%"} style={{display : "flex", alignItems: "center"}}>
                        {/* <h1>Hello</h1> */}
                        <Grid>
                            <h1 style={{color:""}}>Medical Benifits</h1>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid display={"flex"} direction={'row'}>

                    <div style={{ width: "50%" }}>

                    </div>

                </Grid>
            </Grid>

        </div>
    );
}

export default Header;