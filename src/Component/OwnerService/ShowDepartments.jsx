import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const ShowDepartments = () => {
    const [data, setData] = useState([]);

    const getDepartment = () => {

        try {

            axios.get("/manageDepartment/getDepartment")
                .then(response => {
                    console.log(response.data);
                    setData(response.data)
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
        <div style={{ backgroundColor: "#d0e6f3" }}>
            <div>
                <center> <h1>All the Department details is below</h1></center><hr />
            </div>

            <div></div>

            <div style={{ backgroundColor: "#62bef6", width: "90%", marginLeft: "5%" }}>

                {data.map((detail, index) =>
                    <div key={detail.id}>
                        <p style={{ color: "white" }}>
                            <h5 style={{ padding: "2%", }}>Index: {index + 1}<br /><hr />
                                Department Id:- {detail.id},<br /><hr />
                                Department Name:-{detail.departmentName},<br /><hr />
                                No. Of Members:- {detail.noOfMember},<br /><hr />

                                <center> <button onClick={() => { deleteDepartment(detail.id) }} style={{ backgroundColor: "black", color: "red" }} > Delete</button></center>

                            </h5>
                            <div style={{ backgroundColor: "white", color: "red", height: "10px", borderRadius: "20px" }}>
                            </div></p>




                    </div>


                )}
            </div>

        </div>
    )
}

export default ShowDepartments