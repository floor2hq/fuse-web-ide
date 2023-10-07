import React from 'react'
import "../Styles/Message.css"

const Message = () => {
  return (
    <div id='message_container'>
      <div id="messages"></div>
      <input type="text" name="" id="message_box" placeholder='Write a Message...'  autoComplete='false'/>
    </div>
  )
}

export default Message
