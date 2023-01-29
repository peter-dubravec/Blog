import { useEffect, useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { Link } from "react-router-dom"

const Admin = () => {
    const [posts, setPosts] = useState(null)

    const [isPublished, setIsPublished] = useState({ published: null, unPublished: null })

    const [error, setError] = useState(null)
    const { user } = useAuthContext()




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

    useEffect(() => {
        if (posts) {
            setIsPublished({ published: posts.filter(post => post.isPublished), unPublished: posts.filter(post => !post.isPublished) })
        }
    }, [posts])


    return (
        <>
            <Link to="/admin/create-post">Create Post</Link>

            <div className="wrapper--isPublished">
                <div className="publishedContainer">
                    <h3>Published articles</h3>
                    {isPublished.published?.map(post => {
                        return <div className="published" key={post._id}><Link to={`/admin/dashboard/${post._id}`}>{post.title}</Link></div>
                    })}
                </div>

                <div className="unPublishedContainer">
                    <h3>Not published articles</h3>
                    {isPublished.unPublished?.map(post => {
                        return <div className="unPublished" key={post._id}><Link to={`/admin/dashboard/${post._id}`}>{post.title}</Link></div>
                    })}
                </div>
            </div>


        </>
    )
}

export default Admin