import React from 'react'
import { useParams } from 'react-router-dom'
const EditorPage = () => {

    const [clients,setClients] = useState([{
        socketId : 1,
        userName : "Soubhik"
    },
    {
        socketId : 2, 
        userName : "Suswat"
    }]);

    return (
        <div className='mainWrap'>
            <div className='asideInner'>
                <h3>Connected TLS Secured</h3>
                <div className='clientList'>
                    {
                        clients.map((client) => {
                            <Client key={client.socketId} username={client.userName}/>
                        })
                    }
                </div>
            </div >

        </div>
    )
}

export default EditorPage
