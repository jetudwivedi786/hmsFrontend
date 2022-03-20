import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';


const ShowGuest = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getGuest = () => {

        try {
            axios.get("/manageGuest/get")
                .then(response => {
                    console.log(response.data);
                    setData(response.data)
                    setLoading(true)
                })
        }
        catch (error) {
            console.log(error)
        };

    }
    const deleteGuest = (id) => {

        try {
            if (
                axios.delete("/manageGuest/delete/" + id)
                    .then(response => {
                        console.log(response.data);
                        getGuest();
                    })) { alert("Id " + id + " is deleted ") }
        }
        catch (error) {
            console.log(error)
        };

    }

    useEffect(() => {
        getGuest();


    }, []);

    return (
        <>
            <center><h1>All Guests information is here</h1></center><hr />
            <div style={{ backgroundColor: "#552f2f", width: "90%", marginLeft: "4%" }}>
                <table class="table table-white" style={{ textAlign: "center" }}>
                    <tr style={{ border: "2px solid gray", color: "white" }}>
                        <td><h5>Index</h5></td>
                        <td><h5>id no. </h5></td>
                        <td><h5>Member Code</h5></td>
                        <td><h5> phoneNumber</h5></td>
                        <td><h5>company</h5></td>
                        <td><h5>name</h5></td>
                        <td><h5>email</h5></td>
                        <td><h5>gender</h5></td>
                        <td><h5>address</h5></td>
                        <td><h5>Operation</h5></td>


                    </tr>



                    {loading ? data.map((det, index) =>

                        <tr key={det.id} style={{ border: "2px solid gray", color: "white" }}>

                            <td>{index + 1}</td>
                            <td>{det.id}</td>
                            <td>{det.memberCode}</td>
                            <td>{det.phoneNumber}</td>
                            <td>{det.company}</td>
                            <td>{det.name}</td>
                            <td>{det.email}</td>
                            <td>{det.gender}</td>

                            <td>{det.address}</td>




                            <td><button onClick={() => deleteGuest(det.id)} style={{ color: "red", backgroundColor: "black" }}>delete</button></td>
                        </tr>,



                    ) : <div class="spinner-border text-danger" role="status">
                        <span class="sr-only"></span>
                    </div>}





                </table>


            </div>





        </>
    )
}

export default ShowGuest