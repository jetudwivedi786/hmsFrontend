


import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Outlet } from 'react-router-dom';
export const checkAuthentication = () => {

    // if (typeof window == "undefined") {

    //   return false;

    // }

    if (localStorage.getItem("jwt")) {

        return JSON.parse(localStorage.getItem("role"));

    } else {

        return false;

    }

};


export const ProtectedRoute = ({

    userRole,

    allowedRole,

    redirectPath = '/',

    children,

}) => {

    console.log(checkAuthentication(), allowedRole);

    if (checkAuthentication() !== allowedRole) {

        toast.error("Access Denied", {
            position: "top-center",
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        })


        return <Navigate to={redirectPath} replace />

    }



    return children ? children : <Outlet />;

};