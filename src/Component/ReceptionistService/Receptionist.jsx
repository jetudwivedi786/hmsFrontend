import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../HomePageComponents/Footer'
import Header from '../HomePageComponents/Header'
import Navbar from '../HomePageComponents/Navbar'
import ReceptionistNav from '../HomePageComponents/ReceptionistNav'

const Receptionist = () => {
    return (
        <>
            <Header />
            <ReceptionistNav />

            <div style={{ width: "100%", backgroundColor: "#66a8b8", height: "400px", textAlign: "center", }}>

                <h1>Welcome to Guest page</h1><br /><hr />

                <div >

                    <div style={{ float: "left", width: "33%" }}>
                        <center><h1 class="animate__animated animate__zoomIn">Guest</h1></center>
                        <h4><Link to="/receptionist/getGuest" style={{ textDecoration: "none", color: "green" }}> Show and Delete Guests</Link></h4>
                        <h4><Link to="/receptionist/postGuest" style={{ textDecoration: "none", color: "green" }}> Post and Update Guests</Link></h4>

                    </div>
                    <div style={{ float: "left", width: "33%" }}>
                        <center><h1 class="animate__animated animate__zoomIn"> Available room</h1></center>

                        <h4><Link to="/receptionist/availableRooms" style={{ textDecoration: "none", color: "green" }}> See vacant room</Link></h4>


                    </div>
                    <div style={{ float: "left", width: "33%" }}    >
                        <center><h1 class="animate__animated animate__zoomIn">Reservation</h1></center>


                        <h4><Link to="/receptionist/reservation" style={{ textDecoration: "none", color: "green" }}> Make Reservation</Link></h4>
                        <h4><Link to="/receptionist/GetReservation" style={{ textDecoration: "none", color: "green" }}> Get all Reservation</Link></h4>

                    </div>


                </div>
            </div>

            <Footer />



        </>)
}

export default Receptionist