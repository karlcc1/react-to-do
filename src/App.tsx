import React, { useState } from 'react';
import Header from './Components/Header';
import ToDoContainer from './Components/ToDoContainer';
import Form from './Components/Form';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [status, setStatus] = useState("all");

  return (
    <div className="App">
      <Header />
      <Form 
      inputText={inputText}
      setInputText={setInputText} 
      toDoList={toDoList}
      setToDoList={setToDoList}
      setStatus={setStatus} />      
      <ToDoContainer 
      setToDoList={setToDoList}
      toDoList={toDoList} />
    </div>
  );
}

export default App;
