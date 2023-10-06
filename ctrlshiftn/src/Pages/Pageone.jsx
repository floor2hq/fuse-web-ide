import React from 'react'
import Videocall from '../Components/Videocall'
import Navbar from '../Components/Navbar'
import Terminal from '../Components/Terminal'
import Editor from '../Components/Editor'
import Sidebar from '../Components/Sidebar'

const Pageone = () => {
  return (
    <div>
      <Navbar />
      <Videocall />
      <Editor />
      <Terminal />
      <Sidebar />
    </div>
  )
}

export default Pageone
