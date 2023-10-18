import "./closeFriend.css"

export default function CloseFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;


  return (
    <li className="sidebarList">
            <img
              className="sidebarFriendImg"
              src={`${PF}${user.profiePicture}`}
              alt=""
            />
            <span className="sidebarFriendName">{user.userName}</span>
          </li>
  )
}
