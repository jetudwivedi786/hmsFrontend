import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import "../Staff/PostStaffData.css";
import Header from '../../HomePageComponents/Header';
import ManagerNav from '../../HomePageComponents/ManagerNav';

const PostStaffData = () => {
    const [input, setInput] = useState({
        id: "",
        employeeName: "",
        employeeCode: "",
        age: "",
        salary: "",
        email: "",
        // employeeAddress: { houseNo: "", area: "", city: "", state: "", pin: "" }
        employeeAddress: ""


    });
    const [address, setAddress] = useState({
        pin: "",
        state: "",
        houseNo: "",
        area: "",
        city: "",
    })


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
        // fetch("http://localhost:8093/manageStaff/add", {
        // name: input.name,
        // number: input.number,
        // email: input.email,
        // address: input.address,
        // id: input.id,

        // })
        //     .then(res => {
        //         console.log(res.input);
        //     })
        try {
            axios.post("/manageStaff/add", {
                id: input.id,
                employeeName: input.employeeName,
                employeeCode: input.employeeCode,
                age: input.age,
                salary: input.salary,
                email: input.email,
                employeeAddress: input.employeeAddress,




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
        // fetch("http://localhost:8093/manageStaff/add", {
        // name: input.name,
        // number: input.number,
        // email: input.email,
        // address: input.address,
        // id: input.id,

        // })
        //     .then(res => {
        //         console.log(res.input);
        //     })
        try {
            axios.put("/manageStaff/update", {
                id: input.id,
                employeeName: input.employeeName,
                employeeCode: input.employeeCode,
                age: input.age,
                salary: input.salary,
                email: input.email,
                employeeAddress: input.employeeAddress,
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

            {/* <form>
                <input type="text" name="name" id="name" placeholder='name' onChange={inputEvent} value={input.name} required /><br />
                <input type="text" name="number" id="number" placeholder='number' onChange={inputEvent} value={input.number} required /><br />
                <input type="text" name="email" id="email" placeholder='email' onChange={inputEvent} value={input.email} required /><br />
                <input type="text" name="address" id="address" placeholder='address' onChange={inputEvent} value={input.address} required /><br />
                <input type="text" name="id" id="id" placeholder='id' onChange={inputEvent} value={input.id} required /><br />
                <button type="submit" onClick={showdata}>Post</button>
                <button type='submit' onClick={updatedata} >Update</button>



            </form> */}
            {/* boot strap form here */}
            <div class="wrapper">
                <div class="text-center mt-4 name"> Add/Update </div>
                <form class="p-3 mt-3">
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="id" id="houseNo" placeholder='enter id no' onChange={inputEvent} value={input.id} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="employeeName" id="employeeName" placeholder='employeeName' onChange={inputEvent} value={input.employeeName} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="employeeCode" id="employeeCode" placeholder='employeeCode' onChange={inputEvent} value={input.employeeCode} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="age" id="age" placeholder='age' onChange={inputEvent} value={input.age} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="salary" id="salary" placeholder='salary' onChange={inputEvent} value={input.salary} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="email" id="email" placeholder='email' onChange={inputEvent} value={input.email} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="pin" id="pin" placeholder='pin' value={input.pin} onChange={(e) => { setAddress({ ...address, pin: e.target.value }); }} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="state" id="state" placeholder='state' value={input.state} onChange={(e) => { setAddress({ ...address, state: e.target.value }); }} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="houseNo" id="houseNo" placeholder='houseNo' value={input.houseNo} onChange={(e) => { setAddress({ ...address, houseNo: e.target.value }); }} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="area" id="area" placeholder='area' value={input.area} onChange={(e) => { setAddress({ ...address, area: e.target.value }); }} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="city" id="city" placeholder='city' value={input.city} onChange={(e) => { setAddress({ ...address, city: e.target.value }); setInput({ ...input, employeeAddress: address }) }} required /> </div>




                    <button class="btn mt-1" type="submit" onClick={showdata}>Post</button>
                    <button class="btn mt-1" type='submit' onClick={updatedata} >Update</button>
                </form>
            </div>




        </>
    )
}

export default PostStaffData