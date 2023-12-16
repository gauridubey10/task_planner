import { useEffect, useState } from "react";
import "./MainRight.css";

const MainRight = (props) => {
  const {selectedItem , handleSaveItem} = props;
  const [textValue , settextValue] = useState(selectedItem.Text);

  useEffect(()=>{
    settextValue(selectedItem.Text)
  },[selectedItem]);

  const handleInput= (event)=>{
    console.log(event.target.value);
    settextValue(event.target.value);
  }

  const handleSaveButton = ()=>{
    handleSaveItem(selectedItem.id ,textValue )
  }

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

      <div className="SaveButton" onClick={handleSaveButton}>Save Changes</div>
      </div>
  };
  
  export default MainRight;
  