import React from 'react'
import "./index.css"
const ContainerTitle = ({title,className}) => {
  return (
    <h3 className={`text-capitalize container-sub-title ${className?className:""}`}>{title}</h3>
  )
}

export default ContainerTitle