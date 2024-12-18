/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
export const ProtectedRoute = ({ Children}) => {
    const {user} = UserAuth()
    if(!user){
        return <Navigate to='/' />
    }
        return Children;
}
