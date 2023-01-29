import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
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

            if (response.ok) {
                setArticle(json)
            }
        }
        fetchArticle()
    }, [user, id])

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

    const handlePublish = async (id, action) => {
        const response = await fetch(`/api/admin/dashboard/${id}/publish`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isPublished: action })
        })

        if (response.ok) {
            window.location.reload(true)
        } else {
            alert("There was a problem while publishing the post.")
        }
    }

    const handleDeleteComment = async (id) => {
        const response = await fetch(`/api/admin/dashboard/comment/${id}/delete`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
        if (response.ok) {
            alert("comment deleted")
            window.location.reload(true)
        } else {
            console.log("error")
        }
    }

    return (
        <div>
            <div className="article">
                <h1>{articles?.posts.title}</h1>
                {articles?.posts.img && <img src={articles.posts.img} alt="image"></img>}

                <div dangerouslySetInnerHTML={{ __html: articles?.posts.text }} />
                <button onClick={() => deletePost(articles.posts._id)}>Delete</button>
                {articles?.posts.isPublished ? (<button onClick={() => handlePublish(articles.posts._id, false)}>UnPublish</button>) : (<button onClick={() => handlePublish(articles.posts._id, true)}>Publish</button>)}

                <Link to={`/admin/dashboard/${articles?.posts._id}/edit`}><button>Update</button></Link>
            </div>

            {articles?.comments.length ? (articles.comments.map(comment => (
                <div key={comment._id} className="article">
                    <p>{comment.text}</p>
                    <button onClick={() => handleDeleteComment(comment._id)}>Delete</button>
                </div>))) : (<div>Nobody commented this post</div>)}
        </div >
    )
}

export default AdminGetPost