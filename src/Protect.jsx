


import { Navigate } from 'react-router-dom';

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

        alert("ACCESS DENIED")


        return <Navigate to={redirectPath} replace />

    }



    return children ? children : <Outlet />;

};