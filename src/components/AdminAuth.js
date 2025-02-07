
'use client'
import React, { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode"; 


export default function AdminAuth({children}) {

   const [isAdmin, seTisAdmin] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem('token')
        const decodedToken = jwtDecode(token)
        console.log({decodedToken});
        seTisAdmin(decodedToken?.isAdmin)
    }, [])
    

  return (
    <div>{isAdmin ?  children: children}</div>
  )
}
