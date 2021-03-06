import React, { useState } from 'react'
import axios from 'axios'
import Header from '../HomePageComponents/Header'
import Navbar from '../HomePageComponents/Navbar'
import { toast } from "react-toastify"


const PostDepartment = () => {
    const [input, setInput] = useState({
        "id": "",
        "departmentName": "",
        "noOfMember": "",


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
            console.log(input)
            axios.post("/manageDepartment/addDepartment", {
                id: input.id,
                departmentName: input.departmentName,
                noOfMember: input.noOfMember,

            })
                .then(response => {
                    console.log(response.data);
                    alert("uploaded")


                }, error => {
                    error.response.data.map((error) =>

                        toast.error(`${error}`, {

                            position: "top-center",

                        })

                    );


                }

                )

        }
        catch (error) {
            console.log("error is", error)
        };

    }
    // ..............................................................
    const updatedata = (event) => {
        event.preventDefault();

        try {

            axios.put("/manageDepartment/updateDepartment", {
                id: input.id,
                departmentName: input.departmentName,
                noOfMember: input.noOfMember,
            })
                .then(response => {
                    console.log(response);
                    alert("updated")


                }, error => {
                    error.response.data.map((error) =>

                        toast.error(`${error}`, {

                            position: "top-center",

                        }))
                })
        }
        catch (error) {
            console.log("error is", error)
        };

    }

    return (
        <>
            <Header />
            <Navbar />
            <div class="text-center mt-4 name"> <h1>Post and Update Department</h1></div>
            <div class="wrapper">
                <div class="text-center mt-4 name"> Add/Update </div>
                <form class="p-3 mt-3">
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="id" id="id" placeholder='id' onChange={inputEvent} value={input.id} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="departmentName" id="departmentName" placeholder=' departmentName' onChange={inputEvent} value={input.departmentName} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="noOfMember" id="noOfMember" placeholder='noOfMember' onChange={inputEvent} value={input.noOfMember} required /> </div>

                    <button class="btn mt-1" type="submit" onClick={showdata}>Post</button>
                    <button class="btn mt-1" type='submit' onClick={updatedata} >Update</button>
                </form>
            </div>




        </>
    )
}

export default PostDepartment
