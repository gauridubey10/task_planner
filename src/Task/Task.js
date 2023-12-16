import { useEffect, useState } from "react";
import "./Task.css";

const Task = (props) => {
    const {items, onClickItem , selectedItem} = props;
    
    const OnclickTask = (item)=>{
      onClickItem(item);
    }

const taskElement = items.map((item, i)=>(
            <div              
            className={`task ${item.id == selectedItem.id ? 'selected' : ''}`}
            onClick={()=>OnclickTask(item)}>
             <label class="container">
               <input type="checkbox"/>
               <span class="checkmark"></span>
             </label>
             <div className="item"> {item.Text}</div>
             </div>
          ))
 
    return   <div className="taskElement">{taskElement}</div>
}
export default Task;


