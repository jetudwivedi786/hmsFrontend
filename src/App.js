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
const App = () => {
    return (
        <>



            <Routes>
                <Route exact path='/error' element={<ErrorPage />} />
                <Route exact path='/register' element={<Registration />} />
                <Route exact path='/home' element={<Home />} />
                <Route path='/owner' element={<Owner />} />
                <Route path='/receptionist' element={<Receptionist />} />
                <Route path='/about' element={<About />} />
                <Route path='/manager' element={<Manager />} />
                <Route path='/manager/getStaff' element={<ShowStaff />} />
                <Route path='/manager/poststaffdata' element={<PostStaffData />} />
                <Route path='/' element={<Login />} />
                <Route path='/manager/getrooms' element={<ShowRooms />} />
                <Route path='/manager/postrooms' element={<PostRoom />} />
                <Route path='/manager/getInventory' element={<ShowInventory />} />

                <Route path='/manager/postInventory' element={<PostInventry />} />
                <Route path='/owner/getDepartments' element={<ShowDepartments />} />
                <Route path='/owner/department' element={<PostDepartment />} />
                <Route path='/receptionist/getGuest' element={<ShowGuest />} />
                <Route path='/receptionist/postGuest' element={<PostGuest />} />
                <Route path='/receptionist/availableRooms' element={<AvalableRooms />} />
                <Route path='/receptionist/reservation' element={<MakeReservation />} />
                <Route path='/receptionist/getReservation' element={<GetReservation />} />
                <Route path='/payment' element={<Payment />} />
                <Route exact path='/owner/report' element={<Report />} />





            </Routes>

        </>
    )
}

export default App
