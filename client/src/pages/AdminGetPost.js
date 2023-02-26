import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate } from "react-router-dom";
import Moment from 'react-moment';

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

    console.log(articles?.posts)

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
            setArticle({ ...articles, posts: { ...articles.posts, isPublished: !articles.posts.isPublished } })
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

        const json = await response.json()
        console.log(json)
        if (response.ok) {
            const newComments = articles.comments.filter(comment => comment._id != id)
            console.log(newComments)
            setArticle({ ...articles, comments: newComments })
        } else {
            console.log("error")
        }
    }

    return (

        <div className="article-wrapper">
            <div className="content-container article-flex admin-article">
                <h1>{articles?.posts.title}</h1>
                {articles?.posts.img && <img src={articles.posts.img} alt="image"></img>}

                <div dangerouslySetInnerHTML={{ __html: articles?.posts.text }} />

                <div className="crud-buttons">
                    <button className="delete-btn" onClick={() => deletePost(articles.posts._id)}>Delete</button>
                    {articles?.posts.isPublished ? (<button className="publish-btn" onClick={() => handlePublish(articles.posts._id, false)}>UnPublish</button>) : (<button className="publish-btn" onClick={() => handlePublish(articles.posts._id, true)}>Publish</button>)}
                    <Link to={`/admin/dashboard/${articles?.posts._id}/edit`}><button>Update</button></Link>
                </div>

                <div className="comment-wrapper">
                    {articles?.comments.map(comment => (
                        <div key={comment._id} className="comment">
                            <div className="comment-heading"><p className="comment-author">Author: <span>{comment.author}</span></p>
                                <button className='delete-btn' onClick={() => handleDeleteComment(comment._id)}>Delete</button>
                                <p><Moment format="HH:mm DD/MM/YYYY">{comment.createdAt}</Moment></p>
                            </div>
                            <div className="separator"></div>
                            <div className="comment-text">
                                <p>{comment.text}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div >

    )
}


export default AdminGetPost