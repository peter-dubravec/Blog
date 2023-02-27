import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Moment from 'react-moment';

const BlogPost = () => {
    const { id } = useParams()

    const [article, setArticle] = useState(null)

    const [comment, setComment] = useState({ author: "", text: "", })

    const MAX_AUTHOR_LENGTH = 10;

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await fetch(`http://35.180.74.202:5000/api/user/posts/${id}`)
            const json = await response.json()
            if (response.ok) {
                setArticle(json)
            }
        }
        fetchArticle()
    }, [id])



    const handleSubmit = async (e) => {
        e.preventDefault()
        const commentObj = { ...comment, commentedPost: id }
        const response = await fetch(`http://35.180.74.202:5000/api/user/posts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentObj)
        })

        const json = await response.json()
        if (response.ok) {
            setArticle({ ...article, comments: [...article.comments, json] })
        }
    }

    const handleAuthorInput = (e) => {
        if (comment.author.length <= 30) {
            setComment({ ...comment, author: e.target.value })
        }

        if (comment.author.length === 30) {
            const author = comment.author.slice(0, -1);
            setComment({ ...comment, author: author })
        }
    }

    const handleTextAreaInput = (e) => {
        if (comment.text.length <= 100) {
            setComment({ ...comment, text: e.target.value })
        }

        if (comment.text.length === 100) {
            const text = comment.text.slice(0, -1);
            setComment({ ...comment, text: text })
        }
    }

    return (
        <div className="article-wrapper">
            <div className="content-container article-flex">
                <div className="article">
                    <h1>{article?.post.title}</h1>
                    {article?.post.img && <img src={article.post.img} alt="image"></img>}
                    <br />
                    <div className="article-text" dangerouslySetInnerHTML={{ __html: article?.post.text }} />

                </div>

                <div className="comment-wrapper">
                    {article?.comments.map(comment => (
                        <div key={comment._id} className="comment">
                            <div className="comment-heading"><p className="comment-author">Author: <span>{comment.author}</span></p>
                                <p><Moment format="HH:mm DD/MM/YYYY">{comment.createdAt}</Moment></p>
                            </div>
                            <div className="separator"></div>
                            <div className="comment-text">
                                <p>{comment.text}</p>
                            </div>
                        </div>
                    ))}
                </div>


                <form className="comment-form" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-content">
                        <h2>Leave Me A Comment!</h2>
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" id="author" value={comment.author} required onChange={(e) => handleAuthorInput(e)} />
                        <p className="limit-word-count">{30 - comment.author.length} characters left</p>
                        <label htmlFor="text">Comment</label>
                        <textarea type="text" name="text" id="text" cols="50" value={comment.text} required onChange={(e) => handleTextAreaInput(e)} />
                        <p className="limit-word-count">{100 - comment.text.length} characters left</p>
                        <button>Comment</button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default BlogPost