import React, { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../../context/userContext'

export default function Private() {
    const {currentUser} = useContext(UserContext)
    console.log("PRIVATE", currentUser)

    if(!currentUser) {
        return <Navigate to='/' />
    }

  return (
    <div className='container' style={{padding: 0, margin: 0, maxWidth: "1920px"}}>
        <Outlet />
    </div>
  )
}
