import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Payment = () => {



    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const nav = useNavigate();
    const [input, setInput] = useState({
        "orderId": "",
        "amount": "",



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
    const addData = (event) => {
        event.preventDefault();

        try {
            if (
                axios.post("http://localhost:8089/pay/addpayment", {
                    orderId: input.orderId,
                    amount: input.amount,
                })
                    .then(response => {
                        console.log(response.data);




                    })) { alert(input.amount + "Check Payment status with your order Id") }
        }
        catch (error) {
            console.log("error is", error)
        };

    }

    const getPayment = () => {

        try {
            axios.get("http://localhost:8089/pay/getpayment")
                .then(response => {
                    console.log(response.data);
                    setData(response.data)
                    setLoading(true)
                })
        }
        catch (error) {
            console.log(error)
        };

    }
    useEffect(() => {
        getPayment();


    }, []);


    return (
        <>
            <div class="text-center mt-4 name"> <h1>make payment</h1></div>
            <div class="wrapper">
                <div class="text-center mt-4 name"> Enter details </div>
                <form class="p-3 mt-3">
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="orderId" id="orderId" placeholder='orderId' onChange={inputEvent} value={input.orderId} required /> </div>
                    <div class="form-field d-flex align-items-center"> <span class="far fa-user"></span>  <input type="text" name="amount" id="amount" placeholder=' amount' onChange={inputEvent} value={input.amount} required /> </div>

                    <button class="btn mt-1" type="submit" onClick={addData}>Make Payment</button>
                </form>
            </div>
            <div>
                {loading ? data.map((det, index) =>

                    <div key={det.orderId} style={{ border: "2px solid gray" }}>

                        {/* <h6> Index:{index + 1}</h6> */}
                        <h6>orderId:{det.orderId}{" || "}
                            amount:{det.amount}{" || "}
                            Status:{det.paymentStatus}{" || "}
                            {(det.paymentStatus === "success" ? "success" : "retry")}
                        </h6>
                        {/* <h6>txId:{det.txId}</h6> */}






                    </div>,



                ) : <div class="spinner-border text-danger" role="status">
                    <span class="sr-only"></span>
                </div>}

            </div>




        </>
    )
}


export default Payment



