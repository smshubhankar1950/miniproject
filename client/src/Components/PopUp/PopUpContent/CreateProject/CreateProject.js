import React, { useState } from 'react'
import './createProject.css'
import upload from "../../../../Assets/upload-solid.svg"
import close from "../../../../Assets/times-solid.svg"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//Create Project card
export const CreateProject = (props)=>{
    const currentDate = new Date()
    let tommorow = new Date();
    tommorow.setDate(currentDate.getDate()+1)
    const [date , setDate]= useState()
  
    return (
    <div className="container">
        <div className="heading">
            Create Project
        </div>
        <div style={{display:"inline-block"}}>
        <img src={close} className="close" alt="close" onClick={props.showModal}></img>
        </div>
      <hr/>
    <form onSubmit={(e)=>{ e.preventDefault()
                props.nextDisplay()
              return false}} >
      <div className="section2">
      <input className="data" required={true} maxLength="80" type="text" placeholder="&nbsp;&nbsp;Title"/>
      <textarea className="data description" required={true} maxLength="200" placeholder="&nbsp;Description"></textarea>
          <label htmlFor="upload" className="data upload-label">
            <img src={upload} className="icon" alt="upload"></img>
            Upload attachment
          </label>
        <input id ="upload" className="upload" type="file"/>
          <DatePicker 
            required 
            minDate={tommorow} 
            selected={date} 
            disabledKeyboardNavigation
            placeholderText="&nbsp;&nbsp;Delivery date" 
            wrapperClassName="customwidth"
            className="data"
            onChange={(date) => setDate(date)}
            />
        <input className="data" type="number" required={true} min="100" max="10000" placeholder="&nbsp;&nbsp;Project Cost"/>
        <div className="data text">
          <div>CleverX transaction fees(20%)</div>
          <div className="last">$0.00</div>
        </div>
          <div className="data text">
            <div>Total Amount in USD</div>
            <div className="last">$0.00</div>
          </div>
          <div className="create">
              <button type="submit" className="create-btn" > Create Project</button>
          </div>
        </div>
      </form>
    </div>
    
    )
}