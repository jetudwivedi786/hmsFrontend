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
const App = () => {
    return (
        <>

            <Routes>
                <Route path='/register' element={<Registration />} />
                <Route exact path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/owner' element={<Owner />} />
                <Route path='/receptionist' element={<Receptionist />} />
                <Route path='/manager' element={<Manager />} />
                <Route path='/manager/getStaff' element={<ShowStaff />} />
                <Route path='/manager/poststaffdata' element={<PostStaffData />} />
                <Route path='/login' element={<Login />} />
                <Route path='/manager/getrooms' element={<ShowRooms />} />
                <Route path='/manager/postrooms' element={<PostRoom />} />
                <Route path='/manager/getInventory' element={<ShowInventory />} />
                <Route path='/manager/postInventory' element={<PostInventry />} />
                <Route path='/owner/getDepartments' element={<ShowDepartments />} />
                <Route path='/owner/department' element={<PostDepartment />} />
                <Route path='/receptionist/getGuest' element={<ShowGuest />} />
                <Route path='/receptionist/postGuest' element={<PostGuest />} />



            </Routes>

        </>
    )
}

export default App
