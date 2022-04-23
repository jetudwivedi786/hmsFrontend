import React from 'react';
import { Link } from 'react-router-dom';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Marquee from "react-fast-marquee";


const Navbar2 = () => {




    return (
        <>
            <div class="animate__animated animate__pulse">
                <nav class="navbar navbar-expand-lg navbar-dark  " style={{ backgroundColor: "#202420", marginTop: "-10px" }}>
                    <div class="container-fluid">
                        <Link class="navbar-brand" to='/home'><HomeSharpIcon /></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="nav-item">
                            <Link class="nav-link active " to='/about' tabindex="-1" >About</Link>
                        </div>
                        <Marquee pauseOnHover="true" speed="70" ><h5 style={{ color: "white" }}>Welcome to HMS</h5></Marquee>

                        <div class="nav navbar-right" ><Link class="nav-link active " to='/' tabindex="-1"><h6>Login</h6></Link></div>



                    </div>

                </nav>
            </div >
        </>
    )
}

export default Navbar2