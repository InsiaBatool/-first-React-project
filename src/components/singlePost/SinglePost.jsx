import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostwrapper">
        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" 
        />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
         <div className="singlePostEdit">
         <i className="singlePostIcon far fa-edit"></i>
         <i className=" singlePostIcon far fa-trash-alt"></i>
         </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">
                Author :<b>Safak</b>
                </span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDecs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime, consequatur tenetur harum iusto debitis et quod totam pariatur reiciendis veniam sit placeat natus minus fuga libero modi nam necessitatibus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime, consequatur tenetur harum iusto debitis et quod totam pariatur reiciendis veniam sit placeat natus minus fuga libero modi nam necessitatibus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime, consequatur tenetur harum iusto debitis et quod totam pariatur reiciendis veniam sit placeat natus minus fuga libero modi nam necessitatibus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime, consequatur tenetur harum iusto debitis et quod totam pariatur reiciendis veniam sit placeat natus minus fuga libero modi nam necessitatibus?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maxime, consequatur tenetur harum iusto debitis et quod totam pariatur reiciendis veniam sit placeat natus minus fuga libero modi nam necessitatibus?
        </p>
      </div>
    </div>
  )
}
