import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark  " style={{ backgroundColor: "#314e2a", marginTop: "-10px" }}>
                <div class="container-fluid">
                    <Link class="navbar-brand" to='/'>Home</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav p-lg-2">
                            <li class="nav-item">
                                <Link to="/manager" class="nav-link active" aria-current="page" href="#">Manager Service</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/owner" class="nav-link active">Owner Service</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/receptionist" class="nav-link active" >Receptionist Service</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active " to='/about' tabindex="-1" >About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active " to='/login' tabindex="-1" >Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar