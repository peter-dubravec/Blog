import React from 'react'
import { Link } from 'react-router-dom'

const BlogSlider = ({ posts }) => {


    return (

        <>
            {posts && posts.map((post) => (
                <div key={post._id} className="blogArticle">
                    <Link to={`/article/${post._id}`}><img src={post.img} alt={post.title} />
                        <p>{post.title}</p></Link>
                </div>
            ))}

        </>
    )
}

export default BlogSlider