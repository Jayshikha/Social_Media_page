import "./Topbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faUser,faBell,faMessage} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom"
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft"></div>
      <Link to="/" style={{textDecoration:"none"}}>
      <span className="logo">SocialApp</span>

      </Link>

      <div className="topbarCenter"></div>

      <div className="searchbar">
        <input
          placeholder="search here for your friends , Posts and videos"
          className="searchInput"></input>
        {/* <i class="fa-sharp fa-solid  "></i> */}
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>

      <div className="topbarRight">
      <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <Link to="/login" style={{textDecoration:"none"}}>
        <span className="topbarLink" style={{ color: "white" }}>LogOut</span>
          </Link>
      </div>
      
        <div className="topbarIcons">
          <div className="topbarIconItem">
          
            <FontAwesomeIcon icon={faUser} />
            <span className="badge">2</span>
          </div>
          <div className="topbarIconItem">
          <FontAwesomeIcon icon={faMessage}/>
            <span className="badge">3</span> 
          </div>
          <div className="topbarIconItem">
          <FontAwesomeIcon icon={faBell} />
          <span className="badge">5</span> 
          </div>
        </div>
        <img src="https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}
