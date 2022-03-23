import React from 'react';
import Login from './Component/Login';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Registration from './Component/Registration';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Receptionist from "./Component/ReceptionistService/Receptionist";
import Owner from './Component/OwnerService/Owner';
import ShowStaff from './Component/ManagerService/Staff/ShowStaff';
import PostRoom from './Component/ManagerService/Rooms/PostRoom';
import PostStaffData from './Component/ManagerService/Staff/PostStaffData';
import ShowRooms from './Component/ManagerService/Rooms/ShowRooms';
import ShowInventory from './Component/ManagerService/Inventory/ShowInventory';
import Manager from './Component/ManagerService/Manager';
import PostInventry from './Component/ManagerService/Inventory/PostInventry';
import ShowDepartments from './Component/OwnerService/ShowDepartments';
import PostDepartment from './Component/OwnerService/PostDepartment';
import ShowGuest from './Component/ReceptionistService/Guest/ShowGuest';
import PostGuest from './Component/ReceptionistService/Guest/PostGuest';
import AvalableRooms from './Component/ReceptionistService/Guest/AvalableRooms';
import MakeReservation from './Component/ReceptionistService/Reservation/MakeReservation';
import GetReservation from './Component/ReceptionistService/Reservation/GetReservation';
import ErrorPage from './Component/ErrorPage';
import Payment from './Component/Payment/Payment';
import Report from './Component/OwnerService/Report';
import { useNavigate } from 'react-router-dom';
import RazorPay from './Component/Payment/RazorPay';
const App = () => {
    const nav = useNavigate();


    return (
        <>



            <Routes>
                {/* {localStorage.getItem("jwt") ? <Route exact path='/owner' element={<Owner />} /> : null} */}

                <Route exact path='/error' element={<ErrorPage />} />
                <Route exact path='/register' element={<Registration />} />
                {localStorage.getItem("jwt") ? <Route exact path='/home' element={<Home />} /> : null}
                {localStorage.getItem("jwt") ? <Route path='/owner' element={<Owner />} /> : null}
                {localStorage.getItem("jwt") ? <Route path='/receptionist' element={<Receptionist />} /> : null}
                <Route path='/about' element={<About />} />
                <Route path='/manager' element={<Manager />} />
                {localStorage.getItem("jwt") ? <Route path='/manager/getStaff' element={<ShowStaff />} /> : null}
                {localStorage.getItem("jwt") ? <Route path='/manager/poststaffdata' element={<PostStaffData />} /> : null}
                <Route path='/' element={<Login />} />
                {localStorage.getItem("jwt") ? <Route path='/manager/getrooms' element={<ShowRooms />} /> : null}
                {localStorage.getItem("jwt") ? <Route path='/manager/postrooms' element={<PostRoom />} /> : null}
                {localStorage.getItem("jwt") ? <Route path='/manager/getInventory' element={<ShowInventory />} /> : null}

                {localStorage.getItem("jwt") ? <Route path='/manager/postInventory' element={<PostInventry />} /> : null}
                {localStorage.getItem("jwt") ? <Route path='/owner/getDepartments' element={<ShowDepartments />} /> : null}
                {localStorage.getItem("jwt") ? <Route path='/owner/department' element={<PostDepartment />} /> : null}
                {localStorage.getItem("jwt") ? <Route path='/receptionist/getGuest' element={<ShowGuest />} /> : null}
                {localStorage.getItem("jwt") ? <Route path='/receptionist/postGuest' element={<PostGuest />} /> : null}
                {localStorage.getItem("jwt") ? <Route path='/receptionist/availableRooms' element={<AvalableRooms />} /> : null}
                {localStorage.getItem("jwt") ? <Route path='/receptionist/reservation' element={<MakeReservation />} /> : null}
                {localStorage.getItem("jwt") ? <Route path='/receptionist/getReservation' element={<GetReservation />} /> : null}
                <Route path='/payment' element={<Payment />} />
                {localStorage.getItem("jwt") ? <Route exact path='/owner/report' element={<Report />} /> : null}
                <Route path='/razorpay' element={<RazorPay />} />





            </Routes>

        </>
    )
}

export default App
