import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogPost = () => {
    const { id } = useParams()

    const [articles, setArticle] = useState(null)

    const [comment, setComment] = useState({ author: "", text: "", })

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await fetch(`/api/user/posts/${id}`)
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
        const response = await fetch(`/api/user/posts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentObj)
        })

        if (response.ok) {
            window.location.reload();
        }
    }

    return (
        <div className="article-wrapper">
            <div className="article">
                <h1>{articles?.post.title}</h1>
                {articles?.post.img && <img src={articles.post.img} alt="image"></img>}
                <br />
                <div dangerouslySetInnerHTML={{ __html: articles?.post.text }} />

            </div>
            {
                articles?.comments.map(comment => (
                    <div key={comment._id} className="article">

                        <p>{comment.author}</p>
                        <p>{comment.text}</p>
                    </div>
                ))
            }

            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="author">Author</label>
                <input type="text" name="author" id="author" onChange={(e) => setComment({ ...comment, author: e.target.value })} />
                <label htmlFor="text">Comment</label>
                <input type="text" name="text" id="text" onChange={(e) => setComment({ ...comment, text: e.target.value })} />
                <button>Comment</button>
            </form>
        </div >
    )
}

export default BlogPost