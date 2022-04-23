import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from "react-toastify"
import swal from 'sweetalert';



const RazorPay = () => {



    const [data, setData] = useState();
    const [display, setDisplay] = useState([])
    const nav = useNavigate();
    const [change, setChange] = useState({
        amount: "",
        orderId: "",
        paymentStatus: "",
        txId: "",



    })

    const addpay = (pass) => {
        // pass.preventDefault();

        try {
            if (
                axios.post("http://localhost:8089/pay/addpayment", pass

                )
                    .then(response => {
                        console.log(response.data);




                    })) {
                swal("Payment Success!", "Congratulations", "success");

            }
        }
        catch (error) {
            console.log("error is", error)
        };

    }

    const { amount,
        orderId,
        paymentStatus,
        txId } = change;
    const inputEvent = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target
        setData(e.target.value)
        setChange((prev) => {
            return {
                ...prev,
                [name]: value,

            }
        })

    }

    const simplemethod = (response) => {
        setChange({ ...change, paymentStatus: "success", txId: response.razorpay_payment_id })
        console.log(response.razorpay_payment_id)
        // let id = response.razorpay_payment_id;
        // setInput({ ...input, });
        addpay({
            amount: change.amount,
            orderId: change.orderId,

            txId: response.razorpay_payment_id
        });
        console.log(change)
    }
    const addData = (event) => {
        event.preventDefault();
        console.log(data)

        if (
            axios.post("http://localhost:5000/payment/create_order", {
                amount: change.amount,

            })
                .then(response => {
                    console.log(response.data);
                    // setDisplay(response.data)
                    // console.log(localStorage.getItem("paydata"))
                    // console.log(setDisplay)


                    var options = {
                        "key": "rzp_test_qbRIP8bhRC3wZa", // Enter the Key ID generated from the Dashboard
                        "amount": response.data.amount,
                        "currency": "INR",
                        "name": "Hotel Resrvation",
                        "description": "HMS payment",
                        // "image": "https://example.com/your_logo",
                        "order_id": response.data.id,
                        "handler": function (response) {
                            console.log(response);
                            localStorage.setItem("paydata", JSON.stringify(response))
                            setDisplay((localStorage.getItem("paydata")))
                            simplemethod(response);



                        },
                        "prefill": {
                            "name": "",
                            "email": "jeetu@gmail.com",
                            "contact": ""
                        },
                        "notes": {
                            "address": "Hotel Management System"
                        },
                        "theme": {
                            "color": "royalblue"
                        }
                    };
                    var rzp1 = new window.Razorpay(options);
                    rzp1.open();


                })) { }

    }


    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

    }, []);


    return (
        <>
            <div class="text-center mt-4 name"> <h1>make payment</h1></div>
            <div class="wrapper">
                <div class="text-center mt-4 name"> Enter details </div>
                <form class="p-3 mt-3">
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="orderId" id="orderId" placeholder=' orderId' onChange={inputEvent} value={change.orderId} required /> </div>

                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="amount" id="amount" placeholder=' amount' onChange={inputEvent} value={change.amount} required /> </div>
                    <h1></h1>

                    <button class="btn mt-1" type="submit" onClick={addData} >pay({data})</button>
                </form>
            </div>
            <div>{display}</div>

        </>
    )
}






export default RazorPay
