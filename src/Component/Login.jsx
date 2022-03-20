import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


import "./Login.css"
import Header from './HomePageComponents/Header';
import Footer from './HomePageComponents/Footer';
import Navbar2 from './HomePageComponents/Navbar2';


const Login = () => {

    var auth = JSON.stringify(localStorage.getItem("auth"))
    console.log("this is auth string :" + auth);

    const nav = useNavigate();



    const [input, setInput] = useState({
        username: "",
        password: "",
        role: "",



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
            axios.post("http://localhost:8090/auth", {
                username: input.username,
                password: input.password,
                role: input.role,

            })
                .then(response => {
                    console.log(response);

                    localStorage.setItem("jwt", JSON.stringify(response.data.response))
                    localStorage.setItem("role", JSON.stringify(response.data.role))

                    console.log(JSON.stringify(localStorage.getItem("jwt")))
                    console.log(response.data.role)
                    setInput({ ...input, role: response.data.role })

                    if (input.role === "[owner]") {
                        nav("/owner ")
                    }
                    if (input.role === "[manager]") {
                        nav("/manager ")
                    }
                    if (input.role === "[receptionist]") {
                        nav("/receptionist ")
                    }


                    // localStorage.getItem("auth") ?  : null












                }, error => {
                    alert("try with valid credential");
                    console.log(error);
                })






        }
        catch (error) {
            console.log("error is", error)
        };
        // const auth = JSON.stringify(localStorage.getItem("auth"));
        // console.log(auth)
        // auth ? alert("success") : alert("fail")
        // if (auth != null) {
        //     alert("fail")
        // }
        // else {
        //     alert("pass")
        // }
        // login();


    }



    return (
        <>
            <Header />
            <Navbar2 />
            <div class="container-fluid" style={{ paddingLeft: "30%", marginTop: "50px" }}>
                <div class="row main-content bg-success text-center">
                    <div class="col-md-4 text-center company__info">
                        <span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
                        <h4 class="company_title"><img src='./images/logo.png' alt='logo ' style={{ width: "100px", borderRadius: "10px" }} /></h4>
                    </div>
                    <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
                        <div class="container-fluid">
                            <div class="row">
                                <h2>Log In</h2>
                            </div>
                            <div class="row">
                                <form control="" class="form-group">
                                    <div class="row">
                                        <input type="text" name="username" id="username" placeholder='username' onChange={inputEvent} value={input.username} required />                                    </div>
                                    <div class="row">
                                        <input type="password" name="password" id="password" placeholder='password' onChange={inputEvent} value={input.password} required />                                    </div>

                                    <div class="row">
                                        <button style={{ backgroundColor: "#446511", color: "white" }} class="btn mt-1" type="submit" onClick={showdata}>Login</button>
                                    </div>
                                </form>
                            </div>
                            <div class="row">
                                <p>Don't have an account? <Link to="/register">Register Here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>

    )
}

export default Login;
