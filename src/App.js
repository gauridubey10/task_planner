import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { useState } from 'react';

const defaultTask = [
  "Complete your task",
  "Complete your task",
  "Complete your task",
  "Complete your task",
  "Complete your task",
  "Complete your task",
  "Complete your task",
]


function App() {

  const [Items , setItem] = useState(defaultTask);
  const [input, setinput] = useState("");

  const handleInput = (event)=>{
    setinput(event);
  }

  const handleAdd = ()=>{
    const newItem = [input ,...Items ];
    setItem(newItem);

  }

  return (
   <>
   <div className='App'>
   <Header/>
   <Main items={Items} />
   <Footer onInput={handleInput} OnAdd={handleAdd}/>
   </div>
   </>
  );
}

export default App;
