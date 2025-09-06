"use client"
import withAuth from '@/components/hocs/Auth/withAuth';
import React from 'react'

const DashboardModule = () => {
  return (
    <div>
      dash
    </div>
  )
}

export default withAuth(DashboardModule);
