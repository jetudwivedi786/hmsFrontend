import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Table } from 'react-bootstrap'

const ShowInventory = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    const getInventory = () => {

        try {
            axios.get("/inventory/getInventory")
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
    const deleteInventory = (id) => {

        try {
            axios.delete("/inventory/deleteInventory/" + id)
                .then(response => {
                    console.log(response.data);
                    getInventory();
                })
        }
        catch (error) {
            console.log(error)
        };

    }

    useEffect(() => {
        getInventory();


    }, []);




    return (

        <>
            <div id='main' >

                <center> <h1 style={{ color: "white" }}>All the Inventory details are here !</h1></center>

                <Table style={{ margin: "10px" }}>

                    <tr style={{ color: "white" }}>
                        <td>Index</td>
                        <td>id</td>
                        <td>beds</td>
                        <td>tables</td>
                        <td>chairs</td>
                        <td>pillow</td>
                        <td>bedsheet</td>
                        <td>mattress</td>
                        <td >Operation</td>
                    </tr>

                    {loading ? data.map((det, index) =>
                        <tr key={det.id} style={{ color: "white" }}>
                            <td>{index + 1}</td>
                            <td>{det.id}</td>
                            <td>{det.beds}</td>
                            <td>{det.tables}</td>
                            <td>{det.chairs}</td>
                            <td>{det.pillow}</td>
                            <td>{det.bedsheet}</td>
                            <td>{det.mattress}</td>
                            <td><button className='btnn' onClick={() => deleteInventory(det.id)} >Delete</button></td>


                        </tr >) : <center><div class="spinner-border text-danger" role="status">
                            <span class="sr-only"></span>
                        </div></center>}


                </Table >


            </div >
        </>
    )
}

export default ShowInventory