import React from 'react'
import "./index.css"
import { Badge } from 'react-bootstrap'
const StatusChip = ({chip,title,className}) => {
  return (
    // chip-yellow
    <Badge className={`${className} chip-${chip}`} pill>{title}</Badge>
  )
}

export default StatusChip