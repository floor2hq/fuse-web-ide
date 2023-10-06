
import React, { useState, useRef, useEffect } from 'react';
import "../App.css"
import Client from '../components/Client';
import {

    useNavigate,
    Navigate,
    useParams,

} from 'react-router-dom';
import Editor from '../components/Editor';

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
            <Editor/>
            </div>
        </div>
    );
};

export default EditorPage;