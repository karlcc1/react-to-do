import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import ToDoContainer from './Components/ToDoContainer';
import Form from './Components/Form';
import './App.css';

function App() {
  const [title, setTitle] = useState("");
  const [inputToDo, setInputToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    getLocalToDos();
  }, []);

  useEffect(() => {
    saveLocalToDos();
  }, [toDoList]);

  const saveLocalToDos = () => {
      localStorage.setItem('toDoList', JSON.stringify(toDoList));
  };  

  const getLocalToDos = () => {
    if (localStorage.getItem('toDoList') === null) {
      localStorage.setItem('toDoList', JSON.stringify([]));
    } else {
      let parsedLocal = localStorage.getItem('toDoList');
      let toDoLocal = JSON.parse(parsedLocal!);
      setToDoList(toDoLocal);
    }
  };  

  return (
    <div className="App">
      <Header />
      <Form 
      title={title}
      setTitle={setTitle} 
      toDoList={toDoList}
      setToDoList={setToDoList} />      
      <ToDoContainer 
      setToDoList={setToDoList}
      toDoList={toDoList} />
    </div>
  );
}

export default App;
