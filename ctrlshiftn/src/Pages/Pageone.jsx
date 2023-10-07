import React from 'react'
import Videocall from '../Components/Videocall'
import Navbar from '../Components/Navbar'
import Termina from '../Components/Termina'
import Editor from '../Components/Editor'
import Sidebar from '../Components/Sidebar'

const Pageone = () => {
  return (
    <div>
      <Navbar />
      <Videocall />
      <Editor />
        <Termina />
      <Sidebar />
    </div>
  )
}

export default Pageone
