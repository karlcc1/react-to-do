import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import ToDoContainer from './Components/ToDoContainer';
import Form from './Components/Form';
import './App.css';

function App() {
  const [inputTitle, setInputTitle] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const fetchToDoList = () => {
    console.log("fetchToDoList()");
    fetch("https://karl-react-to-do-backend.herokuapp.com/toDoList")
      .then(res => res.json())
      .then(res => setToDoList(res)
      );
  };

  useEffect(() => {
    fetchToDoList();
  }, []);

  return (
    <div className="App">
      <Header />
      <Form 
      inputTitle={inputTitle}
      setInputTitle={setInputTitle} 
      toDoList={toDoList}
      setToDoList={setToDoList} />      
      <ToDoContainer 
      toDoList={toDoList}
      setToDoList={setToDoList} />
    </div>
  );
}

export default App;
