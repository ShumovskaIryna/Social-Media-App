import Post from "../post/Post"
import { useState, useEffect } from 'react'
import Share from "../share/Share"
import axios from 'axios'
import "./feed.css"

export default function Feed(props) {
const [posts, setPosts] = useState([])

useEffect(()=>{
    const fetchPosts = async  () =>{
        const res = await axios.get("posts/timeline/63d2cef0bb69914f92089cad")
        console.log(res);
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
                        <Post key={p.id} post={p} />
                    ))}
                </div>
            </div>
        </>
    )
}