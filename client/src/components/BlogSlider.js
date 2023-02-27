import React from 'react'
import { Link } from 'react-router-dom'

const BlogSlider = ({ posts }) => {

    const limitText = (text) => {
        return text.length > 80 ? text.slice(0, 80) + "..." : text
    }

    return (
        <>
            {posts && posts.map((post) => (
                <Link to={`/article/${post._id}`}>
                    <div key={post._id} className="blogArticle">
                        <img src={post.img} alt={post.title} />
                        <div className="article-teaser">
                            <h2>{post.title}</h2>
                            <div className="article-text" dangerouslySetInnerHTML={{ __html: limitText(post.text) }} />
                        </div>
                    </div>
                </Link>
            ))}

        </>
    )
}

export default BlogSlider