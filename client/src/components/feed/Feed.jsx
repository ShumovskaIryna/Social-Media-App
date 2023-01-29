import Post from "../post/Post"
import { useState, useEffect } from 'react'
import Share from "../share/Share"
import axios from 'axios'
import "./feed.css"

export default function Feed({username}) {
const [posts, setPosts] = useState([])

useEffect(()=>{
    const fetchPosts = async  () =>{
        const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/63d2d4b798e3ac532a834e27");
        setPosts(res.data);
    }
    fetchPosts();
}, [])
    return (
        <>
            <div className="feed">
                <div className="feedWrapper">
                    <Share />
                    {posts.map((p) => (
                        <Post key={p._id} post={p} />
                    ))}
                </div>
            </div>
        </>
    )
}