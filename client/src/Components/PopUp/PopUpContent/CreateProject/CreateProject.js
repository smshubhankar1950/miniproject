import React from 'react'
import './createProject.css'
import upload from "../../../../Assets/upload-solid.svg"
import close from "../../../../Assets/times-solid.svg"

export const CreateProject = (props)=>{
    return (
    <div className="container">
        <div className="heading">
            Create Project
        </div>
        <div style={{display:"inline-block"}}>
        <img src={close} className="close" alt="close" onClick={props.showModal}></img>
        </div>
      <hr/>
      <div className="section2">
      <input className="data" type="text" placeholder="&nbsp;&nbsp;Title"/>
      <textarea className="data description" placeholder="&nbsp;Description"></textarea>
          <label htmlFor="upload" className="data upload-label">
            <img src={upload} className="icon" alt="upload"></img>
            Upload attachment
          </label>
        <input id ="upload" className="upload" type="file"/>
        <input className="data" type="text" placeholder="&nbsp;&nbsp;Delivery Date"/>
        <input className="data" type="text" placeholder="&nbsp;&nbsp;Project Cost"/>
        <div className="data text">
          <div>CleverX transaction fees(20%)</div>
          <div className="last">$0.00</div>
      </div>
        <div className="data text">
          <div>Total Amount in USD</div>
          <div className="last">$0.00</div>
        </div>
        <div className="create">
            <input type="submit" value="Create Project" className="create-btn" onClick={props.nextDisplay}/>
        </div>
      </div>
    </div>
    
    )
}