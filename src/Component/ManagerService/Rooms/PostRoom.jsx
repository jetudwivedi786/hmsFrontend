import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import Header from '../../HomePageComponents/Header';
import ManagerNav from '../../HomePageComponents/ManagerNav';

const PostRoom = () => {
    const [input, setInput] = useState({
        roomnumber: "",
        roomprice: "",
        roomtype: "",
        roomstatus: "",


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
            axios.post("/manageRoom/addrooms", {
                roomnumber: input.roomnumber,
                roomprice: input.roomprice,
                roomtype: input.roomtype,
                roomstatus: input.roomstatus,
            })
                .then(response => {
                    console.log(response.data);
                    alert("uploaded")

                })
        }
        catch (error) {
            console.log("error is", error)
        };

    }
    // ..............................................................
    const updatedata = (event) => {
        event.preventDefault();

        try {
            axios.put("/manageRoom/updaterooms", {
                roomnumber: input.roomnumber,
                roomprice: input.roomprice,
                roomtype: input.roomtype,
                roomstatus: input.roomstatus,
            })
                .then(response => {
                    console.log(response);
                    alert("Data updated")

                })
        }
        catch (error) {
            console.log("error is", error)
        };

    }



    return (
        <>
            <Header />
            <ManagerNav />

            <div class="text-center mt-4 name"> <h1>Post and Update Staff Data</h1></div>

            {/* Basic form here */}


            <div class="wrapper">
                <div class="text-center mt-4 name"> Add/Update </div>
                <form class="p-3 mt-3">
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="roomnumber" id="roomnumber" placeholder='roomnumber' onChange={inputEvent} value={input.roomnumber} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="roomprice" id="roomprice" placeholder=' roomprice' onChange={inputEvent} value={input.roomprice} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="roomtype" id="roomtype" placeholder='roomtype' onChange={inputEvent} value={input.roomtype} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="roomstatus" id="roomstatus" placeholder='roomstatus' onChange={inputEvent} value={input.roomstatus} required /> </div>

                    <button class="btn mt-1" type="submit" onClick={showdata}>Post</button>
                    <button class="btn mt-1" type='submit' onClick={updatedata} >Update</button>
                </form>
            </div>




        </>
    )
}

export default PostRoom