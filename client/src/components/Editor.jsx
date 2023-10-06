import React, { useEffect } from 'react'
import {Codemirror} from "codemirror"
import "../../codemirror-5.65.15/mode/javascript/javascript"
import "../../codemirror-5.65.15/theme/dracula.css"
import "../../codemirror-5.65.15/addon/edit/closetag"
const Editor = () => {

    useEffect(()=>{
        async function initializeEditor() {
                Codemirror.fromTextArea(document.getElementById("realtimeEditor"), {
                    mode: {name : "javascript" ,json:true},
                    theme : 'dracula',
                    autoCloseTags: true,
                })
        }
    })

    return <textarea id='realtimeEditor'></textarea>
}

export default Editor
