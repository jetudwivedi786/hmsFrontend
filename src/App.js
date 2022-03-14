import React from 'react';
import Login from './Component/Login';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Registration from './Component/Registration';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Receptionist from "./Component/ReceptionistService/Receptionist";
import Owner from './Component/OwnerService/Owner';
import ShowStaff from './Component/ManagerService/ShowStaff';
import PostStaffData from './Component/ManagerService/PostStaffData';
import Manager from './Component/ManagerService/Manager';
import ShowRooms from './Component/ManagerService/Rooms/ShowRooms';
import PostRoom from './Component/ManagerService/Rooms/PostRoom';

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







            </Routes>

        </>
    )
}

export default App
