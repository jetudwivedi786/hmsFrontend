import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import LockSharpIcon from '@mui/icons-material/LockSharp';
import Marquee from "react-fast-marquee";


const Navbar2 = () => {
    const nav = useNavigate();




    return (
        <>
            <div class="animate__animated animate__pulse">
                <nav class="navbar navbar-expand-lg navbar-dark  " style={{ backgroundColor: "#202420", marginTop: "-10px" }}>
                    <div class="container-fluid">
                        <Link class="navbar-brand" to='/'><HomeSharpIcon /></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <Marquee pauseOnHover="true" speed="70" ><h5 style={{ color: "white" }}>Welcome to HMS</h5></Marquee>

                        <div class="nav navbar-right" ><Link class="nav-link active " to='/login' tabindex="-1"><LockSharpIcon style={{ color: "white" }} /></Link></div>



                    </div>

                </nav>
            </div >
        </>
    )
}

export default Navbar2