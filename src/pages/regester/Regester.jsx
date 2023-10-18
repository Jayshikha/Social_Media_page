import "./regester.css"
import {Link} from "react-router-dom"
export default function Regester() {
  return (
    <div className="login">
    <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">SocialApp</h3>
            <span className="logindesc">Connect with friends and the world around you on SocialApp</span>

        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input placeholder="Username" className="loginInput"/>
                <input placeholder="Email" className="loginInput"/>
                <input placeholder="Password" className="loginInput"/>
                <input placeholder="Password Again" className="loginInput"/>
                <button className="loginButton">Sign Up</button>
                <Link to="/login" style={{alignSelf:"center"}}>
                <button className="loginRegisterButton">Log into Account</button>

                </Link>
            
            </div>
        </div>
    </div>
   </div>
  )
}
