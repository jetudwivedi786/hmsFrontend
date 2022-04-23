import React, { useState } from 'react'
import axios from 'axios'
import Header from '../../HomePageComponents/Header'
import ManagerNav from '../../HomePageComponents/ManagerNav'

const PostInventry = () => {
    const [input, setInput] = useState({
        "id": "",
        "beds": "",
        "tables": "",
        "chairs": "",
        "pillow": "",
        "bedsheet": "",
        "mattress": ""

    })


    const inputEvent = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target

        setInput((prev) => {
            return {
                ...prev,
                [name]: value,

            }
        })

    }
    const showdata = (event) => {
        event.preventDefault();

        try {
            axios.post("/inventory/addInventry", {
                id: input.id,
                beds: input.beds,
                tables: input.tables,
                chairs: input.chairs,
                pillow: input.pillow,
                bedsheet: input.bedsheet,
                mattress: input.mattress,




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
            axios.put("/inventory/updateInventory", {
                id: input.id,
                beds: input.beds,
                tables: input.tables,
                chairs: input.chairs,
                pillow: input.pillow,
                bedsheet: input.bedsheet,
                mattress: input.mattress,
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
            <div class="text-center mt-4 name"> <h1>Post and Update Inventory</h1></div>
            <div class="wrapper">
                <div class="text-center mt-4 name"> Add/Update </div>
                <form class="p-3 mt-3">
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="id" id="id" placeholder='id' onChange={inputEvent} value={input.id} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="beds" id="beds" placeholder=' beds' onChange={inputEvent} value={input.beds} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="tables" id="tables" placeholder='tables' onChange={inputEvent} value={input.tables} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="chairs" id="chairs" placeholder='chairs' onChange={inputEvent} value={input.chairs} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="pillow" id="pillow" placeholder='pillow' onChange={inputEvent} value={input.pillow} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="bedsheet" id="bedsheet" placeholder='bedsheet' onChange={inputEvent} value={input.bedsheet} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="mattress" id="mattress" placeholder='mattress' onChange={inputEvent} value={input.mattress} required /> </div>

                    <button class="btn mt-1" type="submit" onClick={showdata}>Post</button>
                    <button class="btn mt-1" type='submit' onClick={updatedata} >Update</button>
                </form>
            </div>




        </>
    )
}

export default PostInventry