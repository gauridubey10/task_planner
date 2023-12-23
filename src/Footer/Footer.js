import { useState } from "react";
import "./Footer.css";
import React from "react";

const Footer = (props) => {
  const { onInput , OnAdd} = props;
 
 const priorityType = ["High","Medium","Low"]
  const [inputValue, setInputValue] = useState('');
  const [priority , setpriority] = useState(priorityType[0]);
  const [openModal, setopenModal] = useState(false);

  const newItem = {
    Text: '',
    priority: priorityType[0]
  }

  const handleBtnClick =(event)=>{
    newItem.Text = inputValue;
    newItem.priority = priority;
    OnAdd(newItem);
    setInputValue('');
    setpriority(priorityType[0])
  }

  const handleInput = (event)=>{
    setInputValue(event.target.value);
  }

  const PriorityModal = ()=>{
  const modalStyle = {
    visibility: openModal ? 'visible' : 'hidden',
  };

  const handlePrioritySelection = (index)=>{
    setpriority(priorityType[index]);
    setopenModal(!openModal);
  }

   return(
    <div className="PriorityType" style={modalStyle}>
    {priorityType.map((options,index)=>{
     return ( 
      <div  onClick={()=>handlePrioritySelection(index)}> 
        <span className={`circle color-${index + 1}`} ></span>
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
