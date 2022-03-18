import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';


const GetReservation = () => {
    const [data, setData] = useState([]);

    const getGuest = () => {

        try {
            axios.get("/reservation/getReservation")
                .then(response => {
                    console.log(response.data);
                    setData(response.data)
                })
        }
        catch (error) {
            console.log(error)
        };

    }
    const deleteGuest = (roomNo) => {

        try {
            if (
                axios.delete("/reservation/deleteReservation/" + roomNo)
                    .then(response => {
                        console.log(response.data);
                        getGuest();
                    })) { alert("Id " + roomNo + " is deleted ") }
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

                        <td><h5>roomNo</h5></td>
                        <td><h5>noOfChildren </h5></td>
                        <td><h5>noOfAdult</h5></td>
                        <td><h5> checkInDate</h5></td>
                        <td><h5>checkOutDate</h5></td>
                        <td><h5>status</h5></td>
                        <td><h5>numberOfNight</h5></td>



                    </tr>



                    {data.map((det, index) =>

                        <tr key={det.id} style={{ border: "2px solid gray", color: "white" }}>

                            <td>{index + 1}</td>
                            <td>{det.roomNo}</td>
                            <td>{det.noOfChildren}</td>
                            <td>{det.noOfAdult}</td>
                            <td>{det.checkInDate}</td>
                            <td>{det.checkOutDate}</td>
                            <td>{det.status}</td>
                            <td>{det.numberOfNight}</td>




                            <td><button onClick={() => deleteGuest(det.roomNo)} style={{ color: "red", backgroundColor: "black" }}>delete</button></td>
                        </tr>,



                    )}





                </table>


            </div>





        </>
    )
}

export default GetReservation