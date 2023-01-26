import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import { FaBeer } from 'react-icons/fa';
import { Link } from "react-router-dom"

const Admin = () => {
    const [posts, setPosts] = useState(null)
    const [error, setError] = useState(null)
    const { user } = useAuthContext()
    const { logout } = useLogout()

    const handleLogout = () => {
        logout()
    }


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/admin/dashboard", {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await response.json()

            if (response.ok) {
                setPosts(json)
            }
        }

        if (user) {
            fetchData()
        } else {
            setError("401 Not authorized")
        }

    }, [user])





    return (
        <div>
            <div>{posts?.map(post => {
                return (<div key={post._id}><Link to={`/admin/dashboard/${post._id}`}>{post.title}</Link></div>)
            })}
                {error && <div>{error}</div>}
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Admin