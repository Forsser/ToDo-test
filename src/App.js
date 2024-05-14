
import './App.css';
import {ToDo} from './conponents/todoList/toDo'
import ParallaxEffect from './conponents/todoList/paralaaxElements'
import Modal from './conponents/todoList/modal'
import { Routes, Route } from "react-router-dom";
import {ToodoList} from "./conponents/todoList/todoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ParallaxEffect/>
      <ToodoList/>
        <Routes>
          <Route path='/' element={<ToDo/>}/>
        </Routes>
        <Modal/>

      </header>
    </div>
  );
}

export default App;
