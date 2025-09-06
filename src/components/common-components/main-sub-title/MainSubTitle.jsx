import React from 'react'
import "./index.css"

const MainSubTitle = (props) => {
  return (
    <h2 className={`main-sub-title ${props?.className || ""}`}>{props?.title}</h2>
  )
}

export default MainSubTitle