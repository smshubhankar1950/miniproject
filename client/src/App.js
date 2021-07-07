import React , { useState }  from 'react';
import './App.css';
import { Popup } from './Components/PopUp/Popup';
import { Modal } from './Components/Modal/Modal';
import { CreateProject } from './Components/PopUp/PopUpContent/CreateProject/CreateProject';
import { CreateCard } from './Components/PopUp/PopUpContent/ChooseCard/CreateCard';
function App() {
  const [modalState, setModal] = useState(false)
  const [PopUpState, setPopUp] = useState("Project")
    const showModal =()=>{
        setModal(!modalState)
    }
    let popupDisplayed=()=>{
      if(PopUpState==="Project"){
        setPopUp("card")
      }
      else{
        setPopUp("Project")
      }
    }
    const popUpComp = PopUpState==="Project"?<CreateProject nextDisplay={popupDisplayed} showModal={showModal}/>:<CreateCard showModal={showModal} prevDisplay={popupDisplayed} />
  return (
    <div className="App">
      <button onClick={showModal}>Show PopUp</button>
      <Modal modalState={modalState} showModal={showModal}/>
      <Popup modalState={modalState}>
          {popUpComp}
        </Popup>
    </div>
  );
}

export default App;
