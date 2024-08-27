import React, { useEffect, useState } from 'react'
import './../../css/Loader.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Loader = ({path='login'}) => {
  // set timing of loader
  const [time,setTime]=useState(5);
// create navigation
const navigate=useNavigate()


// create location for if user is un authorised and goto login page after login it goes to previous page which user is accessing
const location=useLocation();


useEffect(()=>{
const interval=setInterval(()=>{
  setTime((previousValue)=> --previousValue)
},1000);
if (time ===0) {
  navigate(`/${path}`,{
    state:location.pathname
  })
}
return ()=>clearInterval(interval)
},[time,navigate,location,path])
  return (
    <div className="loader-container">
      redirecting to you in {time} second
    <div className="loader-background"></div>
    <div className="circle-container">
      <div className="circle red"></div>
      <div className="circle blue"></div>
      <div className="circle green"></div>
      <div className="circle yellow"></div>
    </div>
  </div>
  )
}

export default Loader
