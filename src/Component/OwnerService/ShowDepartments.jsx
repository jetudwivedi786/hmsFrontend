import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import "../HomePageComponents/Card.css"
import Header from '../HomePageComponents/Header';
import Navbar from '../HomePageComponents/Navbar';
const ShowDepartments = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const getDepartment = () => {
        try {
            axios.get("/manageDepartment/getDepartment")
                .then(response => {
                    console.log(response.data);
                    setData(response.data)
                    setLoading(true);
                })
        }
        catch (error) {
            console.log(error)
        };
    }

    const deleteDepartment = (id) => {

        try {
            if (
                axios.delete(`/manageDepartment/deleteDepartment/${id}`)
                    .then(response => {
                        console.log(response);
                        getDepartment();


                    })) { alert("Department id " + id + " is deleted") }
        }
        catch (error) {
            console.log("error is", error)
        };

    }


    useEffect(() => {

        getDepartment();


    }, []);
    return (
        <>
            <Header />
            <Navbar />



            <div style={{ backgroundColor: "#d0e6f3", height: "500px" }}>

                {/* {loading ? data : <center> <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div></center>} */}
                <div>
                    <center> <h1>All the Department details is below</h1></center><hr />
                </div>



                <div>

                    {loading ? data.map((detail, index) =>


                        <div className='cards'>

                            <div className='card_info'>
                                <h6 className='card_category'>  Department Id:- {detail.id}</h6>
                                <h6 className='card_category'>  Department Id:- {detail.departmentName}</h6>
                                <h6 className='card_category'>  Department Id:- {detail.noOfMember}</h6>
                                <center> <button onClick={() => { deleteDepartment(detail.id) }} style={{ backgroundColor: "#dbd596", color: "red" }} > Delete</button></center>

                            </div   >

                        </div>


                    ) : <center><div class="spinner-border text-danger" role="status">
                        <span class="sr-only"></span>
                    </div></center>}:
                </div>

            </div>
        </>
    )
}

export default ShowDepartments