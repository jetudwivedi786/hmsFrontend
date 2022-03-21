import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import "../HomePageComponents/Card.css"
import Header from '../HomePageComponents/Header';
import Navbar from "../HomePageComponents/Navbar";


const Report = () => {
    const [data, setData] = useState([]);
    const [repo, setRepo] = useState([]);
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

    const getrooms = () => {


        try {

            axios.get("/manageDepartment/getRoomOfManager")
                .then(response => {
                    console.log(response.data);
                    setRepo(response.data)
                    setLoading(true);
                })
        }
        catch (error) {
            console.log(error)
        };

    }


    useEffect(() => {
        getGuest();
        getpayGuest();

        getrooms();


    }, []);
    return (
        <><Header />
            <Navbar />

            <div style={{ backgroundColor: "#d0e6f3" }}>

                {/* {loading ? repo : <center> <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div></center>} */}
                <div>
                    <center> <h1>Manager data</h1></center><hr />
                </div>



                <div style={{ with: "100%", height: "600px" }}>
                    <center> <h1>All the rooms</h1></center><hr />


                    {loading ? repo.map((detail, index) =>
                        <div key={detail.id}>
                            <div className='cards'>


                                <div className='card_info'>
                                    <h6 className='card_category'>  roomnumber:- {detail.roomnumber}</h6>
                                    <h6 className='card_category'>  roomprice:-{detail.roomprice}</h6>
                                    <h6 className='card_category'>  roomtype:-{detail.roomtype}</h6>
                                    <h6 className='card_category'>  roomstatus:-{detail.roomstatus}</h6>

                                </div   >
                            </div>







                        </div>


                    ) : <center><div class="spinner-border text-danger" role="status">
                        <span class="sr-only"></span>
                    </div></center>}:
                </div>



                <div>
                    <center><h1>Receptionist data</h1></center><hr />
                    <div style={{ backgroundColor: "#552f2f", width: "100%" }}>
                        <table class="table table-white" style={{ textAlign: "center" }}>
                            <tr style={{ border: "2px solid gray", color: "white" }}>

                                <td><h5>roomNo</h5></td>
                                <td><h5>noOfChildren </h5></td>
                                <td><h5>noOfAdult</h5></td>
                                <td><h5> checkInDate</h5></td>
                                <td><h5>checkOutDate</h5></td>
                                <td><h5>status</h5></td>
                                <td><h5>numberOfNight</h5></td>
                                <td><h5>Payment</h5></td>





                            </tr>



                            {loading ? data.map((det, index) =>

                                <tr key={det.id} style={{ borderBottom: "5px solid blue", color: "white", height: "200px", width: "120%" }}>
                                    {/* {det.paymentDetails.orderId} */}
                                    <td>{det.roomNo}</td>
                                    <td>{det.noOfChildren}</td>
                                    <td>{det.noOfAdult}</td>
                                    <td>{det.checkInDate}</td>
                                    <td>{det.checkOutDate}</td>
                                    <td>{det.status}</td>
                                    <td>{det.numberOfNight}</td>
                                    <td style={{ width: "300px", height: "200px", backgroundColor: "green" }}>Payment-Status:{det.paymentDetails.paymentStatus}<br />amount:{det.paymentDetails.amount}<br />TxId:{det.paymentDetails.txId}</td>
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
                </div>








            </div>
        </>
    )
}

export default Report