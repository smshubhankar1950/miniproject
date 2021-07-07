import React , { useState }  from 'react';
import { Popup } from '../PopUp/Popup';
import { Modal } from '../Modal/Modal';
import { CreateProject } from '../PopUp/PopUpContent/CreateProject/CreateProject';
import { CreateCard } from '../PopUp/PopUpContent/ChooseCard/CreateCard';
const Home= ()=>{
  //Create Project modal State
  const [modalStateProj, setModalP] = useState(false)
  //Payment card Modal state
  const [modalStateCard, setModalC] = useState(false)
  //Current Card state
  const [PopUpState, setPopUp] = useState("Project")
    const showModalProj =()=>{
        setModalP(!modalStateProj)
    }
    const showModalCard=()=>{
      setModalC(!modalStateCard)

  }
  const switchModalCard=()=>{
    setModalC(!modalStateCard)
    setPopUp("Project")
}
//Logic for switching between Popup content
    let popupDisplayed=(event)=>{
      if(PopUpState==="Project"){
        setPopUp("card")
        showModalProj()
        showModalCard()
      }
      else{
        setPopUp("Project")
        showModalProj()
        showModalCard()
      }
    }
    const popUpComp = PopUpState==="Project"?
    <CreateProject nextDisplay={popupDisplayed} showModal={showModalProj}/>:
    <CreateCard showModal={switchModalCard} prevDisplay={popupDisplayed} />

    console.log("modalProj:"+modalStateProj+", Card "+modalStateCard+",Popup "+PopUpState)
  return (
    <div className="App">
      <button onClick={showModalProj}>Show PopUp</button>
      <Modal 
      modalState={PopUpState==="Project"?modalStateProj:modalStateCard} 
      showModal={PopUpState==="Project"?showModalProj:showModalCard}
      />
      <Popup modalState={PopUpState==="Project"?modalStateProj:modalStateCard}>
          {popUpComp}
      </Popup>
    </div>
  );
}

export default Home;
