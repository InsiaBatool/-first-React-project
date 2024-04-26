import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="https://images.unsplash.com/photo-1519218470957-62c7c83c36b4?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt=""
        />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, illum nihil, fugiat totam culpa,  </p>
      
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
          
        </ul>
         </div> 
         <div className="sidebarItem">
         <span className="sidebarTitle">FOLLOW US</span>
         <div className="sidebarSocial">
         <i className="sidebarIcon fab fa-brands fa-facebook"></i>
         <i className="sidebarIcon fab fa-brands fa-square-twitter"></i>
         <i className="sidebarIcon fab fa-brands fa-pinterest-p"></i>
         <i className="sidebarIcon fab fa-brands fa-square-instagram"></i>
         </div>
          </div>    
        </div>
    </div>
  )
}

