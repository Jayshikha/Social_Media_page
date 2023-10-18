import "./post.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical  } from "@fortawesome/free-solid-svg-icons";
// import { faHeart,faThumbsUp } from "@fortawesome/free-solid-svg-icons"; // Add this import
import { Users } from "../../dummyData";
import { useState } from "react";
export default function Post({post}) {
  const [like,setLike] = useState(post.like);
  const [isLiked,setIsLiked] = useState(false);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  const likeHandler =()=>{
    setLike(isLiked ? like-1 :like+1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            
            <img
              className="postProfileImg"
              src={`${PF}${Users.filter((u)=> u.id === post.id)[0].profiePicture}`}
              alt="loading..."
            />
           
            <span className="postUserName">{Users.filter((u)=> u.id === post.id)[0].userName}</span>
            <span className="postData">{post.date}</span>
          </div>
          <div className="postTopRight">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </div>
        </div>
        <div className="postCenter">
          
          <span className="postText">{post.decs}</span>
          <img src={`${PF}${post.photo}`} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
         
            <img src={`${PF}post/heart.png`} alt="" className="heart likeIcon" onClick={likeHandler} />
            <img src={`${PF}post/like.png`} alt="" className="like likeIcon" onClick={likeHandler}/>
            
          <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
    <span className="postCommentText">{post.comment}</span>

          </div>
        </div>
      </div>
    </div>
  );
}
