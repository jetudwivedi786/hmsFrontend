import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../HomePageComponents/Footer'
import Header from '../HomePageComponents/Header'
import Navbar from '../HomePageComponents/Navbar'

const Owner = () => {
    return (
        <>
            <Header />
            <Navbar />

            <div style={{ width: "100%", backgroundColor: "#66a8b8", height: "400px", textAlign: "center" }}>

                <h1 >Welcome to Owner page</h1><br /><hr />
                <table style={{ width: "100%" }}>

                    <tbody>
                        <tr>

                            <th><h1 class="animate__animated animate__slideInLeft">Departments</h1></th>


                        </tr>
                        <tr>

                            <th><h4><Link to="/owner/getDepartments" style={{ textDecoration: "none", color: "green" }}> Show and Delete Departments</Link></h4></th>


                        </tr>
                        <tr>
                            <th><h4><Link to="/owner/department" style={{ textDecoration: "none", color: "green" }}> Post and Update Departments</Link></h4></th>

                        </tr>






                    </tbody>
                </table>
            </div>
            <Footer />


        </>
    )
}

export default Owner