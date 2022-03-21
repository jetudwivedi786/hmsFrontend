import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../HomePageComponents/Header';
import ManagerNav from '../../HomePageComponents/ManagerNav';



const ShowStaff = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);


  const getStaff = () => {
    // const res = await fetch("http://localhost:8093/manageStaff/get");
    // const actualData = await res.json();
    // console.log(actualData);
    // setData(actualData);
    try {
      axios.get("/manageStaff/get")
        .then(response => {
          console.log(response.data);
          setData(response.data)
          setLoading(true);

        })
    }
    catch (error) {
      console.log(error)
    };

  }

  const deletedata = (id) => {
    alert(id + "is deleted");

    try {
      axios.delete(`/manageStaff/delete/${id}`)
        .then(response => {
          console.log(response);
          getStaff();

        })
    }
    catch (error) {
      console.log("error is", error)
    };

  }


  useEffect(() => {
    getStaff();



  }, []);

  return (
    <>
      <Header />
      <ManagerNav />
      <div style={{ backgroundColor: "#d0e6f3" }}>
        <div>
          <center> <h1>All the staff details is below</h1></center><hr />
        </div>

        <div></div>


        <div>

          {loading ? data.map((detail, index) =>


            <div className='cards'>

              <div className='card_info'>
                <h6 className='card_category'> Employee Name:- {detail.employeeName}</h6>
                <h6 className='card_category'> Employee Code:-{detail.employeeCode}</h6>
                <h6 className='card_category'>  Age:- {detail.age}</h6>
                <h6 className='card_category'>  Salary:-{detail.salary}</h6>

                <h6 className='card_category'>  Email Id:- {detail.email}</h6>

                <h6 style={{ fontWeight: "bold" }} className='card_category'> Employee Address:</h6>

                <h6 className='card_category'> House Number:-{detail.employeeAddress.houseNo}<br />
                  Area:-{detail.employeeAddress.area}<br />
                  City:-{detail.employeeAddress.city}<br />
                  State:-{detail.employeeAddress.state}<br />
                  PIN Code:-{detail.employeeAddress.pin}<br />

                </h6 >


              </div   >

            </div>


          ) : <center><div class="spinner-border text-danger" role="status">
            <span class="sr-only"></span>
          </div></center>}:
        </div>


      </div>
    </>
  )
}

export default ShowStaff