import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"

const PostGuest = () => {
    const [input, setInput] = useState({
        "id": "",
        "memberCode": "",
        "phoneNumber": "",
        "company": "",
        "name": "",
        "email": "",
        "gender": "",
        "address": "",


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
                axios.post("/manageGuest/add", {
                    id: input.id,
                    memberCode: input.memberCode,
                    phoneNumber: input.phoneNumber,
                    company: input.company,
                    name: input.name,
                    email: input.email,
                    gender: input.gender,
                    address: input.address,
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
                axios.put("/manageGuest/update", {
                    id: input.id,
                    memberCode: input.memberCode,
                    phoneNumber: input.phoneNumber,
                    company: input.company,
                    name: input.name,
                    email: input.email,
                    gender: input.gender,
                    address: input.address,
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

            <div class="text-center mt-4 name"> <h1>Post and Update Staff Data</h1></div>

            {/* Basic form here */}


            <div class="wrapper">
                <div class="text-center mt-4 name"> Add/Update </div>
                <form class="p-3 mt-3">
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="id" id="id" placeholder='id' onChange={inputEvent} value={input.id} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="memberCode" id="memberCode" placeholder=' memberCode' onChange={inputEvent} value={input.memberCode} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="phoneNumber" id="phoneNumber" placeholder='phoneNumber' onChange={inputEvent} value={input.phoneNumber} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="company" id="company" placeholder='company' onChange={inputEvent} value={input.company} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="name" id="name" placeholder='name' onChange={inputEvent} value={input.name} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="email" id="email" placeholder='email' onChange={inputEvent} value={input.email} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="gender" id="gender" placeholder='gender' onChange={inputEvent} value={input.gender} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="address" id="address" placeholder='address' onChange={inputEvent} value={input.address} required /> </div>

                    <button class="btn mt-1" type="submit" onClick={showdata}>Post</button>
                    <button class="btn mt-1" type='submit' onClick={updatedata} >Update</button>
                </form>
            </div>




        </>
    )
}

export default PostGuest
