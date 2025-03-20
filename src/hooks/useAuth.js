'use client'
import { jwtDecode } from 'jwt-decode';
import  { useEffect, useState } from 'react'

export default function useAuth() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        try {
            const token = localStorage?.getItem('token')
            const data = jwtDecode(token)
            setUser(data);

        } catch (err) {
            console.log('');

        }
    }, [])

    return {
        id: user?.id ?? null,
        isAdmin: user?.isAdmin ?? null,
        name: user?.name ?? ''
    }
}
