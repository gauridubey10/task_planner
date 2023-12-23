import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { useState } from 'react';

const defaultTask = [
  {
    id: '1',
    Text: "Made roadmap for expert frontent developer",
    priority: 'high'
  },
  {
    id: '2',
    Text: "Connecting with billu",
    priority: 'high'
  }, {
    id: '3',
    Text: "making timeline for task",
    priority: 'high'
  }, {
    id: '4',
    Text: "Exerciese",
    priority: 'medium'
  }, {
    id: '5',
    Text: "Cleaming",
    priority: 'low'
  }, {
    id: '6',
    Text: "loggging off the office laptop",
    priority: 'medium'
  }, {
    id: '7',
    Text: "go to take grocery",
    priority: 'low'
  },
]


function App() {

  const [Items , setItem] = useState(defaultTask);
  const [input, setinput] = useState("");

  const handleInput = (inputValue)=>{
    console.log("handleInput",inputValue);
    setinput(inputValue);
  }

  const handleAdd = (Item)=>{
    const Items_size = Items.length;
    const newTask = {
      id: Items_size + 1,
      Text: Item.Text,
      priority: Item.priority
    }

   // Items.push(newTask);
    const newItem =   Items.concat(newTask)
     setItem(newItem);

  }
  
  const updateTaskText = (id, newText) => {
    // Create a copy of the original array
    const updatedTasks = [...Items];
  
    // Find the index of the item with the given id
    const taskIndex = updatedTasks.findIndex(task => task.id === id);
  
    // If the item with the given id is found, update its Text property
    if (taskIndex !== -1) {
      updatedTasks[taskIndex] = {
        ...updatedTasks[taskIndex],
        Text: newText,
      };
    }

    
  
    // Return the updated array
    return updatedTasks;
  };

  const handleSaveItem = (editItemId, editText)=>{
    const newItem = updateTaskText(editItemId,editText);
    setItem(newItem);
  }

  return (
   <>
   <div className='App'>
   <Header/>
   <Main items={Items} handleSaveItem={handleSaveItem} />
   <Footer onInput={handleInput} OnAdd={handleAdd}/>
   </div>
   </>
  );
}

export default App;
