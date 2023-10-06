import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid"
import { useNavigate } from 'react-router-dom';
const Homepage = () => {

    const [roomId,setRoomId] = useState("");
    const [username,setUsername] = useState("");
    const navigate = useNavigate();
    function createNewRoom(e) {
            e.preventDefault();
            const id = uuidv4(); 
            console.log(id);
            setRoomId(id); 
    }

    function joinRoom() {
        if(!roomId || !username) {
            alert("Bad creds,fill everything up");
            return;
        }

        //redirect to editor
        navigate(`/editor/${roomId}`, {
            state : {
                username : username,
            }
        })
        
    }

    return (
        <div>
            <input onChange={(e)=>{setRoomId(e.target.value )}} value ={roomId} type="text" name="" id="" placeholder="Room ID" />
            <input onChange={(e)=>{setUsername(e.target.value )}} type="text" value={username } name="" id="" placeholder="Username" />
            <br />
            <br />
            <button onClick={joinRoom}>Join</button>
            <br />
            <span>Create New Room by clicking
                <a onClick={createNewRoom} href=''> here</a></span>
        </div>
    )
}

export default Homepage
