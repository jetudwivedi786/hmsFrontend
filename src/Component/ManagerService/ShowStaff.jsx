import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';


const ShowStaff = () => {

  const [data, setData] = useState([]);

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
    <div style={{ backgroundColor: "#d0e6f3" }}>
      <div>
        <center> <h1>All the staff details is below</h1></center><hr />
      </div>

      <div></div>

      <div style={{ backgroundColor: "#62bef6", width: "90%", marginLeft: "5%" }}>

        {data.map((detail, index) =>
          <div key={detail.id}>
            <p style={{ color: "white" }}>
              <h5 style={{ padding: "2%", }}>Id: {detail.id}<br /><hr />
                Employee Name:- {detail.employeeName},<br /><hr />
                Employee Code:-{detail.employeeCode},<br /><hr />
                Age:- {detail.age},<br /><hr />
                Salary:-{detail.salary},<br /><hr />
                Email Id:- {detail.email},<br /><hr />

                <div>Employee Address:</div>
                <div style={{ fontSize: "15px", marginLeft: "20px", width: "40%" }}> House Number:-{detail.employeeAddress.houseNo}<br />
                  Area:-{detail.employeeAddress.area}<br />
                  City:-{detail.employeeAddress.city}<br />
                  State:-{detail.employeeAddress.state}<br />
                  PIN Code:-{detail.employeeAddress.pin}<br />

                </div ><br />
                <center> <button onClick={() => { deletedata(detail.id) }} style={{ backgroundColor: "black", color: "red" }} > Delete</button></center>






              </h5>
              <div style={{ backgroundColor: "white", color: "red", height: "10px", borderRadius: "20px" }}>
              </div></p>




          </div>


        )}
      </div>

    </div>
  )
}

export default ShowStaff