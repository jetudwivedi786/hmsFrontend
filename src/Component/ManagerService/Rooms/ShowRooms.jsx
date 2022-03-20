import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';


const ShowRooms = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    const getroom = () => {

        try {
            axios.get("/manageRoom/getrooms")
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
    const deleteroom = (roomnumber) => {

        try {
            axios.delete("/manageRoom/deleterooms/" + roomnumber)
                .then(response => {
                    console.log(response.data);
                    getroom();
                })
        }
        catch (error) {
            console.log(error)
        };

    }

    useEffect(() => {
        getroom();


    }, []);

    return (
        <>
            <center><h1>All room information is here</h1></center><hr />
            <div style={{ backgroundColor: "#552f2f", width: "90%", marginLeft: "4%" }}>
                <table class="table table-white" style={{ textAlign: "center" }}>
                    <tr style={{ border: "2px solid gray", color: "white" }}>
                        <td><h5>Index</h5></td>
                        <td><h5>Room no. </h5></td>
                        <td><h5>Room price</h5></td>
                        <td><h5>Room type</h5></td>
                        <td><h5>Room status</h5></td>
                        <td><h5>Operation</h5></td>
                    </tr>



                    {loading ? data.map((det, index) =>

                        <tr key={det.roomnumber} style={{ border: "2px solid gray", color: "white" }}>

                            <td>{index + 1}</td>
                            <td>{det.roomnumber}</td>
                            <td>{det.roomprice}</td>
                            <td>{det.roomtype}</td>
                            <td>{det.roomstatus}</td>

                            <td><button onClick={() => deleteroom(det.roomnumber)} style={{ color: "red", backgroundColor: "black" }}>delete</button></td>
                        </tr>,



                    ) : <center><div class="spinner-border text-danger" role="status">
                        <span class="sr-only"></span>
                    </div></center>}





                </table>


            </div>





        </>
    )
}

export default ShowRooms