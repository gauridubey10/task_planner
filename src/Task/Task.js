import { useState } from "react";
import "./Task.css";

const Task = (props) => {
    const {items, onClickItem} = props;
    const [isSelected , setisSelected] = useState(false);
 
    const OnclickTask = (item)=>{
      onClickItem(item);
      setisSelected(true);
    }
const taskElement = items.map((item, i)=>(
            <div  
            className={`task ${isSelected ? 'selected' : ''}`}
            onClick={()=>OnclickTask(item)}>
             <label class="container">
               <input type="checkbox"/>
               <span class="checkmark"></span>
             </label>
             <div className="item"> {item}</div>
             </div>
          ))

    return <div className="taskElement">{taskElement}</div>
}
export default Task;


