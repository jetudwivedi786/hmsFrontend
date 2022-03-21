import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Header from '../../HomePageComponents/Header'
import ReceptionistNav from '../../HomePageComponents/ReceptionistNav'

const MakeReservation = () => {
    const nav = useNavigate();

    const [input, setInput] = useState({
        "roomNo": "",
        "noOfChildren": "",
        "noOfAdult": "",
        "checkInDate": "",
        "checkOutDate": "",
        "status": "",
        "numberOfNight": "",
        "paymentDetails": ""


    });


    const inputEvent = (event) => {

        const { name, value } = event.target;
        setInput((previousvalue) => {
            console.log(previousvalue.data);
            return {
                ...previousvalue,
                [name]: value,
            }



        });
    };
    const updatedata = (event) => {
        event.preventDefault();
        console.log(input)
        try {
            if (
                axios.post("/reservation/addReservation", {
                    roomNo: input.roomNo,
                    noOfChildren: input.noOfChildren,
                    noOfAdult: input.noOfAdult,
                    checkInDate: input.checkInDate,
                    checkOutDate: input.checkOutDate,
                    status: input.status,
                    numberOfNight: input.numberOfNight,

                })
                    .then(response => {
                        console.log(response);
                        nav("/receptionist/getReservation")

                    })) { alert("Data updated") }
        }
        catch (error) {
            console.log("error is", error)
        };

    }



    return (
        <>
            <Header />
            <ReceptionistNav />

            <div class="text-center mt-4 name"> <h1>Make  and Update Reservation</h1></div>

            {/* Basic form here */}


            <div class="wrapper">
                <div class="text-center mt-4 name"> Make/Update </div>
                <form class="p-3 mt-3">
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="roomNo" id="roomNo" placeholder='roomNo' onChange={inputEvent} value={input.roomNo} /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="noOfChildren" id="noOfChildren" placeholder=' noOfChildren' onChange={inputEvent} value={input.noOfChildren} /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="noOfAdult" id="noOfAdult" placeholder='noOfAdult' onChange={inputEvent} value={input.noOfAdult} /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="date" name="checkInDate" id="checkInDate" placeholder='checkInDate' onChange={inputEvent} value={input.checkInDate} /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="date" name="checkOutDate" id="checkOutDate" placeholder='checkOutDate' onChange={inputEvent} value={input.checkOutDate} /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="status" id="status" placeholder='status' onChange={inputEvent} value={input.status} /> </div>
                    {/* <button class="btn mt-1" type="submit" onClick={showdata}>Post</button> */}
                    {((input.status) && (input.checkOutDate) && (input.checkInDate) && (input.noOfAdult) && (input.noOfChildren) && (input.roomNo)) === "" ?
                        <a style={{ pointerEvents: "none", color: "black" }} href="http://localhost:3000/payment" target="_new">Click here Payment </a> : <a href="http://localhost:3000/payment" target="_new">Click here Payment </a>}

                    <button class="btn mt-1" type='submit' onClick={updatedata} >Add Reservation</button>

                </form>
            </div>;




        </>
    )
}



export default MakeReservation
