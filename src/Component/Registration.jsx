import React from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import "./Login.css"
import Header from './HomePageComponents/Header';
import Footer from './HomePageComponents/Footer';
import Navbar2 from './HomePageComponents/Navbar2';
const Registration = () => {

    var auth = JSON.stringify(localStorage.getItem("auth"))
    console.log("this is auth string :" + auth);

    const nav = useNavigate();
    const [input, setInput] = useState({
        username: "",
        password: "",

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
            axios.post("http://localhost:8090/subs", {
                username: input.username,
                password: input.password,

            })
                .then(response => {
                    console.log(response.data.response);

                    const a = localStorage.setItem("auth", JSON.stringify(response.data.response))
                    nav("/login")

                })
        }
        catch (error) {
            console.log("error is", error)
        };
    }
    return (
        <>
            <Header />
            <Navbar2 />
            <div class="container-fluid" style={{ paddingLeft: "30%", marginTop: "50px" }}>
                <div class="row main-content bg-success text-center">

                    <div >
                        <div class="container-fluid">
                            <div class="row">
                                <h2 style={{ color: "wheat" }}>Registration here!</h2>
                            </div>
                            <div class="row">
                                <form control="" class="form-group">
                                    <div class="row">
                                        <input type="text" name="username" id="username" placeholder='create username' onChange={inputEvent} value={input.username} required />                                    </div>
                                    <div class="row">
                                        <input type="text" name="password" id="password" placeholder='create password' onChange={inputEvent} value={input.password} required />                                    </div>

                                    <div class="row">
                                        <button style={{ backgroundColor: "#446511", color: "white" }} class="btn mt-1" type="submit" onClick={showdata}>Register</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>

    )
}
export default Registration;