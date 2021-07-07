import React from 'react'
import './Popup.css'

export const Popup = (props)=>{
    return (
        <div className="card" style={props.modalState?{display:"block"}:{display:"none"}}>
            {props.children}
        </div>
    )
}