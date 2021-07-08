import React, { useState } from 'react'
import './createProject.css'
import upload from "../../../../Assets/upload-solid.svg"
import close from "../../../../Assets/times-solid.svg"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//Create Project card
export const CreateProject = (props)=>{
    const currentDate = new Date()
    //Get date range for future using tommorow's date
    let tommorow = new Date();
    tommorow.setDate(currentDate.getDate()+1)

    //State to hold form data for submission
    const [formData , setData]= useState({
      name:"",
      summary:"",
      cost:"",
      date:"",
    })
    // State to hold calculated costs
    const [calculated , setCalculated] =useState(
      {
      transFees:0.00,
      total:0.00
      }
      )
    // onchange handlers for input fields of the form
    const onnameChange = (e)=>{
        setData({...formData, name:e.target.value})
    }
    const onDescChange = (e)=>{
        setData({...formData, summary:e.target.value})
    }
    const onDateChange = (date)=>{
        setData({...formData, date:date})
    }
    const onCostChange = (e)=>{
        let fees = 0.20 * e.target.value;
        let totalCost = 1.20* e.target.value;
        setData({...formData, cost:e.target.value})
        setCalculated({transFees:fees,total:totalCost})
    }
    return (
    <div className="container">
      <div className="row">
        <div className="col-2-3">
        <div className="heading">
            Create Project
        </div>
        </div>
        <div className="col-1-2-3">
        <img src={close} className="close" alt="close" onClick={props.showModal}></img>
        </div>
        </div>
      <hr/>
    <form onSubmit={(e)=>
        { e.preventDefault()
          props.nextDisplay(formData)
          return false
        }
          } >
      <div className="section2">
      <input className="data" required={true} maxLength="80" type="text" placeholder="&nbsp;&nbsp;Title" onChange={onnameChange}/>
      <textarea className="data description" required={true} maxLength="200" placeholder="&nbsp;Description" onChange={onDescChange}></textarea>
          <label htmlFor="upload" className="data upload-label">
            <img src={upload} className="icon" alt="upload"></img>
            Upload attachment
          </label>
        <input id ="upload" className="upload" type="file"/>
          <DatePicker 
            required 
            minDate={tommorow} 
            selected={formData.date} 
            disabledKeyboardNavigation
            placeholderText="&nbsp;&nbsp;Delivery date" 
            wrapperClassName="customwidth"
            className="data"
            onChange={onDateChange}
            />
        <input className="data" type="number" required={true} min="100" max="10000" placeholder="&nbsp;&nbsp;Project Cost" onChange={onCostChange}/>
        <div className="data text">
          <div>CleverX transaction fees(20%)</div>
          <div className="last">${calculated.transFees}</div>
        </div>
          <div className="data text">
            <div>Total Amount in USD</div>
            <div className="last">${calculated.total}</div>
          </div>
          <div className="create">
              <button type="submit" className="create-btn" > Create Project</button>
          </div>
        </div>
      </form>
    </div>
    
    )
}