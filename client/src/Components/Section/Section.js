import React from 'react'
import './section.css'
import file from "../../Assets/file.svg"
import folder from "../../Assets/folder.svg"
import calendar from "../../Assets/calendar.svg"
export const Section = (props)=>{
    return(<div className="section-card">
    <div className="section-1">
        <img src={file} alt="file"/>
        Your Project Request</div>
    <div className="section-2">
      <div className="row">
        <div className="col-2-3">
          I'll be your Buisness expert
        </div>
        <div className="col-1-3 text-dir">
          <div className="amount">$20</div>
          <div>Total:$24</div>
          <div>(CleverX fee for 20%)</div>
        </div>
      </div>
    </div>
    <div className="section-3">
      Instead of the typical seemless color transition that you see in gradient
    </div>
    <div className="section-4">
      <div className="row">
        <div className="col-1-3">
        <img src={calendar} className="sec-icon" alt="date"/> 2 day delivery
        </div>
        <div className="col-1-3">
        <img src={folder} className="sec-icon-2" alt="folder"/> attachment
        </div>
      </div>
     </div>
      <input type="button" value="cancel" className="cancel-btn"/>
  </div>)
}