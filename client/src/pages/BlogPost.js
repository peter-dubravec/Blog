import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogPost = () => {
    const { id } = useParams()
    const [articles, setArticle] = useState(null)

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await fetch(`/api/user/posts/${id}`)
            const json = await response.json()
            if (response.ok) {
                setArticle(json)
            }
        }
        fetchArticle()
    }, [])

    return (
        <div>
            <div className="article">
                {articles?.post.title}
                <br />
                {articles?.post.text}
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

export default BlogPost