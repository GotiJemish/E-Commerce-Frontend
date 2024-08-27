import { useEffect, useState } from "react";
import { AuthHook } from "../../context/authentication";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Loader from "../reusables/Loader";
import { BACKEND_URL } from "../../services/helper";



const ProtectedRoute=()=>{
const[OK,setOK]=useState(false)
const[authenticate, setAutenticate]=AuthHook()

useEffect(()=>{
const checkAuthentication =async()=>{
    const response=await axios.get(`${BACKEND_URL}/authentication/user-authentication`)
    if (response.data.OK) {
        setOK(true)
    }else{
        setOK(false)
    }
}
if(authenticate?.token){
    checkAuthentication();
}
},[authenticate?.token])


return OK ? <Outlet/>: <Loader/>
}

export default ProtectedRoute