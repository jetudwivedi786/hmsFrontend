import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../HomePageComponents/Header';
import ReceptionistNav from '../../HomePageComponents/ReceptionistNav';


const GetReservation = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pay, setPay] = useState([]);
    var paymentprint;

    const getpayGuest = () => {
        try {
            axios.get("/manageGuest/getpayment")
                .then(response => {
                    console.log(response.data);
                    setPay(response.data)

                })
        }
        catch (error) {
            console.log(error)
        };

    }


    const getGuest = () => {
        try {
            axios.get("/reservation/getReservation")
                .then(response => {
                    console.log(response.data);
                    setData(response.data)
                    setLoading(true)
                    paymentprint = JSON.stringify(data)

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
        getpayGuest();



    }, []);

    return (
        <>
            <Header />
            <ReceptionistNav />
            <center><h1>All Guests information is here</h1></center><hr />
            <div style={{ backgroundColor: "#552f2f", width: "100%" }}>
                <table class="table table-white" style={{ textAlign: "center" }}>
                    <tr style={{ border: "2px solid gray", color: "white" }}>
                        <td><h5>Index</h5></td>

                        <td><h5>roomNo</h5></td>
                        <td><h5>noOfChildren </h5></td>
                        <td><h5>noOfAdult</h5></td>
                        <td><h5> checkInDate</h5></td>
                        <td><h5>checkOutDate</h5></td>
                        <td><h5>status</h5></td>

                        <td><h5>Payment</h5></td>
                        <td><h5>Operation</h5></td>





                    </tr>



                    {loading ? data.map((det, index) =>

                        <tr key={det.id} style={{ borderBottom: "5px solid #917575", color: "white", height: "200px", width: "120%" }}>
                            {/* {det.paymentDetails.orderId} */}
                            <td>{index + 1}</td>
                            <td>{det.roomNo}</td>
                            <td>{det.noOfChildren}</td>
                            <td>{det.noOfAdult}</td>
                            <td>{det.checkInDate}</td>
                            <td>{det.checkOutDate}</td>
                            <td>{det.status}</td>
                            <td style={{ width: "300px", height: "200px", backgroundColor: "#725959" }}>Payment-Status:{det.paymentDetails.paymentStatus}<br />amount:{det.paymentDetails.amount}<br />TxId:{det.paymentDetails.txId}</td>
                            <td><button onClick={() => deleteGuest(det.roomNo)} style={{ color: "red", backgroundColor: "black" }}>delete</button></td>
                            {/* <td style={{ color: "green" }}>{det.paymentDetails.orderId}</td> */}
                            {/* <tr>

                                {pay.map((detail, ind) =>
                                    <td style={{ color: "white" }}>{detail.orderId}</td>

                                )}
                            </tr> */}








                        </tr>,




                    ) : <center><div class="spinner-border text-danger" role="status">
                        <span class="sr-only"></span>
                    </div></center>}








                </table>


            </div>






        </>
    )
}

export default GetReservation