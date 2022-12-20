import "./post.css";
import { MoreVert } from '@mui/icons-material';

export default function Post() {

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/access/person/1.jpeg"
              alt=""
            />
            <span className="postUsername"> Panda Vlad
            </span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">This is my Panda Family!</span>
          <img className="postImg" src="/access/posts/first.png" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="access/like.png" alt="" />
            <img className="likeIcon" src="access/heart.png" alt="" />
            <span className="postLikeCounter">28 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}