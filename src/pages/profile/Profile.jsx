import "./profile.css"
import Topbar from "../../components/TopBar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  return (
    <>
    <Topbar />
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
     <div className="profileRightTop">
     <div className="profileCover">
     <img src={`${PF}post/ps3.jpeg`} alt="" className="profileCoverImg"/>
     <img src={`${PF}person/p3.jpeg`} alt="" className="profileUserImg"/>
     </div>
     <div className="profileInfo">
      <h4 className="proileInfoName">Safak Koncoagulu</h4>
      <span className="proileInfoDesc">Lorem, ipsum. ipsum dolor sit amet. </span>
     </div>
      </div>
     <div className="profileRightBottom">
      <Feed/>
    <Rightbar profile/>
     </div>
    </div>
    

    </div>

   
  </>
  )
}
