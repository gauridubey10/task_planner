
import Task from "../../Task/Task";
import "./MainLeft.css";


const MainLeft = (props) => {

  const {items , onClickItem , selectedItem} = props;
    return ( 
      <div className="MainLeft">
      <Task items={items} onClickItem={onClickItem} selectedItem={selectedItem}/>
      </div>  
    );
  };
  
  export default MainLeft;
  