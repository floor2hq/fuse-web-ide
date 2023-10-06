import React from 'react'
import user_img from "../assets/user_img.jpg"
import "../Styles/Videocall.css"

const Videocall = () => {
  return (
    <div id='videocall_container'>
      <div id='user1'>
        <img src={user_img} alt="" id='user_img'/>
        <img src={user_img} alt="" id='user_img'/>
      </div>
    </div>
  )
}

export default Videocall
