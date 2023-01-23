import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/user/posts')
            const json = await response.json()

            if (response.ok) {
                setPosts(json)
            }
        }

        fetchPosts()
    }, [])

    return (
        <div className="home">
            <div className="posts">
                {posts && posts.map((post) => (
                    <div key={post._id} className="blogArticle">
                        <Link to={`article/${post._id}`}>{post.title}</Link>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Home