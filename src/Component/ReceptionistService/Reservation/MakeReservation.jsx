import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"

const MakeReservation = () => {
    const [input, setInput] = useState({
        "roomNo": "",
        "noOfChildren": "",
        "noOfAdult": "",
        "checkInDate": "",
        "checkOutDate": "",
        "status": "",
        "numberOfNight": "",


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
    const showdata = (event) => {
        event.preventDefault();

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
                        console.log(response.data);


                    })) { alert("uploaded") }
        }
        catch (error) {
            console.log("error is", error)
        };

    }
    // ..............................................................
    const updatedata = (event) => {
        event.preventDefault();

        try {
            if (
                axios.put("/reservation/updateReservation", {
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


                    })) { alert("Data updated") }
        }
        catch (error) {
            console.log("error is", error)
        };

    }



    return (
        <>

            <div class="text-center mt-4 name"> <h1>Make  and Update Reservation</h1></div>

            {/* Basic form here */}


            <div class="wrapper">
                <div class="text-center mt-4 name"> Make/Update </div>
                <form class="p-3 mt-3">
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="roomNo" id="roomNo" placeholder='roomNo' onChange={inputEvent} value={input.roomNo} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="noOfChildren" id="noOfChildren" placeholder=' noOfChildren' onChange={inputEvent} value={input.noOfChildren} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="noOfAdult" id="noOfAdult" placeholder='noOfAdult' onChange={inputEvent} value={input.noOfAdult} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="checkInDate" id="checkInDate" placeholder='checkInDate' onChange={inputEvent} value={input.checkInDate} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="checkOutDate" id="checkOutDate" placeholder='checkOutDate' onChange={inputEvent} value={input.checkOutDate} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="status" id="status" placeholder='status' onChange={inputEvent} value={input.status} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="numberOfNight" id="numberOfNight" placeholder='numberOfNight' onChange={inputEvent} value={input.numberOfNight} required /> </div>
                    {/* <button class="btn mt-1" type="submit" onClick={showdata}>Post</button> */}
                    <button class="btn mt-1" type='submit' onClick={updatedata} >Add Reservation</button>
                </form>
            </div>




        </>
    )
}



export default MakeReservation