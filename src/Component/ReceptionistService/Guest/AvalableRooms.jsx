import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const AvalableRooms = () => {
    const [data, setData] = useState([]);

    const getdata = () => {
        try {

            axios.get("/reservation/getRoomByStatus")
                .then(response => {
                    console.log(response.data);
                    setData(response.data)
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
        <div style={{ backgroundColor: "#d0e6f3", width: "100%%", padding: "10px" }}> <h1>AvalableRooms</h1><br />

            {data.map((detail, index) =>

                <div key={detail.roomNo} >
                    <h4>Room No.-: {detail.roomNo},</h4> <hr />
                </div>






            )}





        </div>

    )
}

export default AvalableRooms