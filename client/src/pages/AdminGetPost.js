import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { FaBeer } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const AdminGetPost = () => {
    const { id } = useParams()
    const [articles, setArticle] = useState(null)
    const { user } = useAuthContext()
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await fetch(`/api/admin/dashboard/${id}`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            const json = await response.json()
            console.log(json)
            if (response.ok) {
                setArticle(json)
            }
        }
        fetchArticle()
    }, [id])

    const deletePost = async (id) => {
        const response = await fetch(`/api/admin/dashboard/${id}/delete`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        if (response.ok) {
            alert("Post Deleted")
            navigate("/admin/dashboard");
        } else {
            alert("There was a problem while deleting post.")
        }
    }

    return (
        <div>
            <div className="article">
                {articles?.posts.title}
                <br />
                {articles?.posts.text}
                <FaBeer onClick={() => deletePost(articles.posts._id)} />
                <button>Edit</button>
            </div>
            {
                articles?.comments.map(comment => (
                    <div key={comment._id} className="article">
                        <p>{comment.text}</p>
                    </div>
                ))
            }
        </div >
    )
}

export default AdminGetPost