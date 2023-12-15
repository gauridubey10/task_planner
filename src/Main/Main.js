import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";
import "./Main.css";
import { useState } from "react";



const Main = (props) => {
  const {items , handleSaveItem} =props;
  const [selectedItem , setSelectedItem] = useState(items[0]);
  const onClickItem=(item)=>{
    console.log("item,",item);
      setSelectedItem(item); 
  }


    return <div className="Main">
         <MainLeft items={items} onClickItem={onClickItem}/>
         <MainRight selectedItem={selectedItem} handleSaveItem={handleSaveItem}/>
        </div>;
  };
  
  export default Main;
  