import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    const Logout = () => { if (typeof window !== "undefined") { localStorage.removeItem("jwt"); } };


    return (
        <>
            <div class="animate__animated animate__pulse">
                <nav class="navbar navbar-expand-lg navbar-dark  " style={{ backgroundColor: "#202420", marginTop: "-10px" }}>
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav p-lg-2">

                                <li class="nav-item">
                                    <Link to="/owner" class="nav-link active">Owner</Link>
                                </li>


                                {/* <li class="nav-item">
                                    <Link class="nav-link active " to='/about' tabindex="-1" >About</Link>
                                </li> */}
                                {/* <li class="nav-item nav navbar-">
                                <Link class="nav-link active" to='/login' tabindex="-1" >Login</Link>
                            </li> */}

                            </ul>

                        </div>
                        <div class="nav navbar-right" >

                            {localStorage.getItem("jwt") && (<ul class="navbar-nav  mb-2 mb-lg-0"> <li className="nav-item">
                                <Link to="/" tag="h6" onClick={Logout} style={{ color: "white", cursor: "pointer" }} >Logout </Link></li></ul>)}

                        </div>
                    </div>

                </nav>
            </div>
        </>
    )
}

export default Navbar