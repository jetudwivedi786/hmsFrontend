import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Footer from '../../HomePageComponents/Footer';
import Header from '../../HomePageComponents/Header';
import ReceptionistNav from '../../HomePageComponents/ReceptionistNav';




const AvalableRooms = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)

    const getdata = () => {
        try {

            axios.get("/reservation/getRoomByStatus")
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
    useEffect(() => {
        getdata();

    }, [])

    return (
        <>
            <Header />
            <ReceptionistNav />



            <div style={{ backgroundColor: "#d0e6f3", width: "100%%", height: "500px", padding: "10px" }}> <center><h1>AvalableRooms</h1></center><br />

                <div>

                    {loading ? data.map((det, index) =>


                        <div className='cards'>

                            <div className='card_info'>
                                <h6 className='card_category'> Room no.:- {det.roomNo}</h6>

                            </div   >

                        </div>


                    ) : <center><div class="spinner-border text-danger" role="status">
                        <span class="sr-only"></span>
                    </div></center>}:
                </div>

            </div>
            <div>
                <Footer />
            </div>







        </>
    )
}

export default AvalableRooms