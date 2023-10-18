import "./share.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaugh, faLocationDot, faTags } from '@fortawesome/free-solid-svg-icons';
import { faPhotoFilm } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
        <Link to="/profile/safak" style={{textDecoration:"none"}}>
                <img
            className="shareProfileImg"
            src="/assets/person/p2.avif"
            alt="loading..."
          />
        </Link>
    
          <input placeholder="What's in your mind ?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOption">
          <FontAwesomeIcon icon={faPhotoFilm} className="shareIcon" style={{ color: 'tomato' }} />
            <span className="shareOptionText">Photo or Video</span>
          </div>
          <div className="shareOption">
          <FontAwesomeIcon icon={faTags} className="shareIcon" style={{ color: 'blue' }} />
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOption">
          <FontAwesomeIcon icon={faLocationDot} className="shareIcon" style={{ color: 'green' }} />
          
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOption">
          <FontAwesomeIcon icon={faFaceLaugh} className="shareIcon" style={{ color: 'golden' }} />
    
            <span className="shareOptionText">Feeling</span>
          </div>
        <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
