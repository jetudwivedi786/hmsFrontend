import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../HomePageComponents/Footer'
import Header from '../HomePageComponents/Header'
import Navbar from '../HomePageComponents/Navbar'

const Receptionist = () => {
    return (
        <>
            <Header />
            <Navbar />

            <div style={{ width: "100%", backgroundColor: "#66a8b8", height: "400px", textAlign: "center" }}>

                <h1>Welcome to Guest page</h1><br /><hr />
                <center><h1 class="animate__animated animate__zoomIn">Guest</h1></center>   <br /><br />
                <table style={{ width: "100%" }}>

                    <tbody>





                        <tr>
                            <th><h4><Link to="/receptionist/getGuest"> Show and Delete Guests</Link></h4></th>
                            <th><h4><Link to="/receptionist/postGuest"> Post and Update Guests</Link></h4></th>

                        </tr>


                    </tbody>
                </table>
            </div>

            <Footer />



        </>)
}

export default Receptionist