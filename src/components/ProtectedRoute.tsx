import { Navigate } from "react-router-dom"
import { isAuthenticated } from "../utils/auth";
import React from "react";


export const ProtectedRoute = ({children} : {children : React.ReactNode }) => {
    if (!isAuthenticated()) {
        return <Navigate to='/login' replace />;
    }
    return children;
}