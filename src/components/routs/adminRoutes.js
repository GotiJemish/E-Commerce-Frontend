import { useEffect, useState } from "react";
import { AuthHook } from "../../context/authentication";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../reusables/Loader";
import { BACKEND_URL } from "../../services/helper";
import toast from "react-hot-toast";



const AdminRoute=()=>{
const[OK,setOK]=useState(false)
const[authenticate, setAutenticate]=AuthHook()
const navigate = useNavigate();

useEffect(()=>{
const checkAuthentication =async()=>{
try {
    const response=await axios.get(`${BACKEND_URL}/authentication/admin-authentication`)
    if (response.data.OK) {
        setOK(true)
    }else{
        setOK(false)
        toast.error("Unauthorized access");
        navigate(""); // Redirect to login page
    }
} catch (error) {
    setOK(false);
        toast.error("Unauthorized access");
        navigate(""); // Redirect to login page
}

}
if(authenticate?.token){
    
    checkAuthentication();
}
},[authenticate?.token,navigate])


return OK ? <Outlet/>: <Loader path=""/>
}

export default AdminRoute
