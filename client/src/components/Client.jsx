import React from 'react'
import Avatar from "react-avatar"
import "../App.css"
const Client = ({username}) => {
    console.log('username',username);
  return (
      <Avatar name={username} size={50} round="14px"/>
  )
}

export default Client
