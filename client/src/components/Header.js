import { Link } from 'react-router-dom';
import { useState } from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import '../App.css'

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
                        <Link className="links" to='/'><h3 style={{ fontWeight: "normal" }}>Home</h3></Link>
                        <Link className="links" to='/termsandconditions'><h3 style={{ fontWeight: "normal" }}>About</h3></Link>
                        <Link className="links"><h3 style={{ fontWeight: "normal" }}>News and Media</h3></Link>
                        <Link className="links"><h3 style={{ fontWeight: "normal" }}>Contact us</h3></Link>
                        <h3><Button sx={{ ":hover": { bgcolor: "#68b9f1", color: "black" }, backgroundColor: "#03355A", color: "white" }} style={{ borderRadius: 15, padding: "15px", fontWeight: "bold", fontSize: "15px" }}>Check your Health</Button></h3>
                    </Grid>
                </header>
            </AppBar>
        </div>
    );
}

export default Header;