// import React, { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Client from '../components/Client';
// import "./EditorPage.css"
// import "../App.css"
// const EditorPage = () => {

//     const [clients, setClients] = useState([{
//         socketId: 1,
//         userName: "Soubhik Gon"
//     },
//     {
//         socketId: 2,
//         userName: "Suswat PB"
//     },
//     {
//         socketId: 3,
//         userName: "Maheshwar"
//     }, {
//         socketId: 4,
//         userName: "Putin"
//     }]);

//     return (
//         <div className='mainWrap' style={{ display: "flex", flexDirection: "row"}}>
//             <div className='asideInner'>
//                 <h3>Connected TLS Secured</h3>
//                 <div className='clientList' style={{ display: "flex", flexDirection: "row" }}>
//                     {
//                         clients.map((client) => {
//                             return <Client style={{ margin: "20px" }} key={client.socketId} username={client.userName} />
//                         })
//                     }
//                 </div>
//                 <button>Copy Room ID</button>
//                     <button>Leave</button>
//             </div >

//             <div className='codearea' style={{ backgroundColor: "red",width:"2000px"}}>
//                 <h1>CodeSpace</h1>
//             </div>
//         </div>
//     )
// }

// export default EditorPage

import React, { useState, useRef, useEffect } from 'react';
import "../App.css"
import Client from '../components/Client';

import {

    useNavigate,
    Navigate,
    useParams,

} from 'react-router-dom';

const EditorPage = () => {
    const { roomId } = useParams();
    const reactNavigator = useNavigate();
    const [clients, setClients] = useState([{
        socketId: 1,
        username: "Soubhik Gon",
    },
    {
        socketId: 2,
        username: "Suswat PB",
    },
    {
        socketId: 3,
        username: "Maheswar",
    },
    {
        socketId: 4,
        username: "Putin",
    },
    {
        socketId: 5,
        username: "Divya ",
    }]);

    async function copyRoomId() {
        try {
            console.log("Room ID : ",roomId)
            await navigator.clipboard.writeText(roomId);
            alert("Room ID copied!")
        } catch (err) {
            alert('Could not copy the Room ID');
            console.error(err);
        }
    }

    function leaveRoom() {
        reactNavigator('/');
    }

    return (
        <div className="mainWrap">
            <div className="aside">
                <div className="asideInner">
                    <div className="logo">
                    </div>
                    <h3>Connected</h3>
                    <div className="clientsList">
                        {clients.map((client) => (
                            <Client
                                key={client.socketId}
                                username={client.username}
                            />
                        ))}
                    </div>
                </div>
                <br /><br />
                <button className="btn copyBtn" onClick={copyRoomId}>
                    Copy Room Id
                </button>
                <button className="btn leaveBtn" onClick={leaveRoom}>
                    Leave
                </button>
            </div>
            <div className="editorWrap">
            </div>
        </div>
    );
};

export default EditorPage;