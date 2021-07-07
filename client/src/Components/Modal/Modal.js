import React from 'react'
import './Modal.css'

export const Modal = (props)=>{
    
    return(
        <div className="modal" style={props.modalState?{display:"block"}:{display:"none"}} onClick={props.showModal}>
        </div>
    )
}