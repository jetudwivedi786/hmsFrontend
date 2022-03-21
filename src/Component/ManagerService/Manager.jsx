import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../HomePageComponents/Footer'
import Header from '../HomePageComponents/Header'
import ManagerNav from "../HomePageComponents/ManagerNav"
const Manager = () => {
    return (
        <>
            <Header />
            <ManagerNav />

            <div style={{ width: "100%", backgroundColor: "#66a8b8", height: "400px", textAlign: "center" }}>

                <h1>Welcome to manager page</h1><br /><hr />
                <table style={{ width: "100%" }}>

                    <tbody>
                        <tr>

                            <th><h1 class="animate__animated animate__fadeInTopRight">Staff</h1></th>
                            <th><h1 class="animate__animated animate__fadeInTopRight">Room</h1></th>
                            <th><h1 class="animate__animated animate__fadeInTopRight">Inventry</h1></th>

                        </tr>
                        <tr>
                            <td><h5><Link to="/manager/getStaff" style={{ textDecoration: "none", color: "green" }}>Show Staff and Manage</Link></h5></td>
                            <td><Link to="/manager/getrooms" style={{ textDecoration: "none", color: "green" }}><h5>Show rooms and manage</h5></Link></td>
                            <td><h5><Link to="/manager/getInventory" style={{ textDecoration: "none", color: "green" }}>Show inventory and delete details</Link></h5></td>


                        </tr>
                        <tr>
                            <td><h5><Link to='/manager/poststaffdata' style={{ textDecoration: "none", color: "green" }}>Add and Delete Staff Data</Link></h5></td>
                            <td><h5><Link to="/manager/postrooms" style={{ textDecoration: "none", color: "green" }}>Add and update room</Link></h5> </td>
                            <td><h5><Link to="/manager/postInventory" style={{ textDecoration: "none", color: "green" }}>Add and Update inventry details</Link></h5></td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <Footer />

        </>)
}

export default Manager