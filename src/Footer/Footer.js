import { useState } from "react";
import "./Footer.css";
import React from "react";

const Footer = (props) => {
  const { onInput , OnAdd} = props;
 const priorityType = ["high","Medium","Low"]

  const [inputValue, setInputValue] = useState('');
  const [priority , setpriority] = useState(priorityType[0]);
  const [openModal, setopenModal] = useState(false);

  const handleBtnClick =(event)=>{
    OnAdd();
    setInputValue('');
  }

  const handleInput = (event)=>{
    setInputValue(event.target.value);
    onInput(event.target.value);
   
  }

  const PriorityModal = ()=>{
 // if(!openModal) return null;
  const modalStyle = {
    visibility: openModal ? 'visible' : 'hidden',
  };

   return(
    <div className="PriorityType" style={modalStyle}>
    {priorityType.map((options,index)=>{
     return ( 
      <div> 
        <span className={`circle color-${index + 1}`}></span>
        <button key={index}>{options}</button> 
        </div>
     )
    })}
    </div>
   );
  }

  const onCLickPriority = ()=>{
    console.log("priority button click");
    setopenModal(!openModal);
  }
  
  return (
    <div className="Footer">
      <div className="InputBar">
        <input
          type="text"
          id="task"
          name="InputBar"
          placeholder="Enter your task here"
          value={inputValue}
          onChange={handleInput}
        />
        <div className="PriorityModal">
        {PriorityModal()}
        <button className="Priority" onClick={onCLickPriority}>Priority
        </button>
       
        </div>
      </div>
      <button onClick={handleBtnClick}>Add</button>
    </div>
  );
};

export default Footer;
