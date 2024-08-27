// using context apis make global state

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const Context=createContext()


// authentication provider for setting global state
const AuthProvider=({children})=>{
    // make global state 
    const[authenticate, setAutenticate]=useState({
        user:null,
        token:''
    })


// default axios set
// const API=axios.defaults.baseURL='http://localhost:8080/api/v1'

axios.defaults.headers.common['Authorization']=authenticate?.token

    // when token is generate and stored in localstorage then for parse that token data
useEffect(()=>{
const user_data=localStorage.getItem('authentication')
if(user_data){
const parsing_user_data=JSON.parse(user_data)
setAutenticate({
    ...authenticate,
    user:parsing_user_data.user,
    token:parsing_user_data.token
})
}
},[])


    return(
    <Context.Provider value={[authenticate, setAutenticate]}>
        {children}
    </Context.Provider>
    )
}

// create customised hook
const AuthHook=()=>useContext(Context)

export{AuthHook,AuthProvider}
