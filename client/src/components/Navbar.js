import React from 'react'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleLogout = () => {
        logout()
    }

    return (
        <div className="navbar">
            <a className="logo" href="/">Blog</a>
            {user && <div>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>}
        </div>
    )
}

export default Navbar