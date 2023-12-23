import { useEffect, useState } from "react";
import "./Task.css";
import { colors } from "@mui/material";

const Task = (props) => {
    const {items, onClickItem , selectedItem} = props;
    
    const OnclickTask = (item)=>{
      onClickItem(item);
    }

    const taskElement = items.map((item, i)=>(
            <div              
            className={`task ${item.id == selectedItem.id ? 'selected' : ''} ${item.priority}`}
            onClick={()=>OnclickTask(item)}>
             <label class="container">
               <input type="checkbox"/>
               <span class="checkmark"></span>
             </label>
             <span className={`priority ${item.priority}`}>!</span>
             <div className="item"> {item.Text}</div>
             
             </div>
          ))
 
    return   <div className="taskElement">{taskElement}</div>
}
export default Task;


