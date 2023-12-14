
import Task from "../../Task/Task";
import "./MainLeft.css";


const MainLeft = (props) => {

  const {items , onClickItem} = props;
    return ( 
      <div className="MainLeft">
      <Task items={items} onClickItem={onClickItem}/>
      </div>  
    );
  };
  
  export default MainLeft;
  