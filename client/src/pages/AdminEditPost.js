import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

const AdminEditPost = () => {
    const [article, setArticle] = useState("")
    const { id } = useParams()
    const { user } = useAuthContext()
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/admin/dashboard/${id}/without-comments`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()

            if (response.ok) {
                setArticle(json)
            } else {
                console.log("error")
            }
        }
        fetchData()
    }, [user, id])

    const handleSubmit = async (e) => {
        e.preventDefault()
       
        const response = await fetch(`/api/admin/dashboard/${id}/update`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: article.title, text: article.text })
        })
        const json = await response.json()

        if (response.ok) {
            alert("Post updated")
            navigate(`/admin/dashboard/${id}`);
        }
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name="title" onChange={(e) => setArticle({ ...article, title: e.target.value })} value={article && article.title} />
            <input type="text" name="text" onChange={(e) => setArticle({ ...article, text: e.target.value })} value={article && article.text} />
            <button>Update</button>
        </form>
    )
}

export default AdminEditPost