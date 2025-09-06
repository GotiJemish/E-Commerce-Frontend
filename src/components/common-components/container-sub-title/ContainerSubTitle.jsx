import React from 'react'
import "./index.css"
const ContainerSubTitle = ({title,className}) => {
  return (
    <h3 className={`text-capitalize sub-title sub-title-after ${className?className:""}`}>{title}</h3>
  )
}

export default ContainerSubTitle