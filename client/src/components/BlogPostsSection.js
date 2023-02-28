import React, { useEffect, useState } from 'react'
import BlogSlider from './BlogSlider'

const BlogPostsSection = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('http://35.180.74.202/api/user/posts')
            const json = await response.json()

            if (response.ok) {
                setPosts(json)
            }
        }

        fetchPosts()
    }, [])

    return (

        <section className="blog-section" id="blogid">
            <div className="blog-container content-container">

                <div className="section--heading"><h2>What I study</h2>
                    <p>Blog Posts</p>
                    <span className="separator"></span>
                </div>

                <div className="posts-container">
                    <div className="posts">
                        <BlogSlider posts={posts} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default BlogPostsSection