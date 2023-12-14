import { useState } from "react";
import "./MainRight.css";

const MainRight = (props) => {
  const {selectedItem} = props;
  const [textValue , settextValue] = useState(selectedItem);

  const handleInput= (event)=>{
    console.log(event.target.value);
    settextValue(event.target.value);
  }
  console.log("inputvalue",textValue,selectedItem)

    return <div className="MainRight">
      <div className="editContainer">
       <div
       style={{ alignItems: 'flex-start' , marginBottom: '20px' }}
        >Edit:</div>
         <textarea
          type="text"
          name="InputBar"
          value={textValue}
          onChange={handleInput}
        />
        
      </div>

      <div className="SaveButton">Save Changes</div>
      </div>
  };
  
  export default MainRight;
  