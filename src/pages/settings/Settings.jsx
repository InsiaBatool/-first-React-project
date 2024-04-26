import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingWrapper">
        <div className="settingsTitel">
          <div className="settingsUpdateTitel">Update Your Account</div>
          <div className="settingsDeleteTitel">Delete Account</div>
        </div>
        <form className="settingsForm">
          <label>profile picture</label>
          <div className="settingsPP">
            <img className="settingImg"
             src=  "https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
            alt=""
            />
            <label htmlFor="fileInput">
              <i className=" settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="filr" id="fileInput" style={{display:"none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Insia"/>
          <label>Email</label>
          <input type="email" placeholder="insiabatool@gmail.com"/>
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
          
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
