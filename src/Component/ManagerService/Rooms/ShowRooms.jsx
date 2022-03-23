import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../HomePageComponents/Header';
import ManagerNav from '../../HomePageComponents/ManagerNav';


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
            <Header />
            <ManagerNav />
            <center><h1>All room information is here</h1></center><hr />
            <div >

                <div>

                    {loading ? data.map((det, index) =>


                        <div className='cards'>

                            <div className='card_info'>
                                <h6 className='card_category'> Room no.:- {det.roomnumber}</h6>
                                <h6 className='card_category'>  Room price:- {det.roomprice}</h6>
                                <h6 className='card_category'>  Room type:- {det.roomtype}</h6>
                                <h6 className='card_category'>  Room status:- {det.roomtype}</h6>
                                <h6 className='card_category'> Room status:-{det.roomstatus}</h6>

                                <center> <button onClick={() => { deleteroom(det.id) }} style={{ backgroundColor: "#dbd596", color: "red" }} > Delete</button></center>

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

export default ShowRooms