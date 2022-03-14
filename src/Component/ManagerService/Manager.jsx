import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../HomePageComponents/Footer'
import Header from '../HomePageComponents/Header'
import Navbar from '../HomePageComponents/Navbar'
const Manager = () => {
    return (
        <>
            <Header />
            <Navbar />

            <div style={{ width: "100%", backgroundColor: "#e4c8c8", height: "400px", textAlign: "center" }}>

                <h1 style={{ color: "#f8efef" }}>Welcome to manager page</h1><br /><hr />
                <table style={{ width: "100%" }}>

                    <tbody>
                        <tr>

                            <th><h1>Staff</h1></th>
                            <th><h1>Room</h1></th>
                            <th><h1>Inventry</h1></th>

                        </tr>
                        <tr>
                            <td><h5><Link to="/manager/getStaff">Show Staff and Manage</Link></h5></td>
                            <td><Link to="/manager/getrooms"><h5>Show rooms and manage</h5></Link></td>
                            <td><h5>Show inventory and delete details</h5></td>

                        </tr>
                        <tr>
                            <td><h5><Link to='/manager/poststaffdata'>Add and Delete Staff Data</Link></h5></td>
                            <td><h5><Link to="/manager/postrooms">Add and update room</Link></h5> </td>
                            <td><h5>Add and Update inventry details</h5></td>
                        </tr>

                    </tbody>
                </table>
            </div>

            <Footer />

        </>)
}

export default Manager