import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import ToDoContainer from './Components/ToDoContainer';
import Form from './Components/Form';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [status, setStatus] = useState("all");
  const [ftoDoList, setfToDoList] = useState([]);

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setfToDoList(toDoList.filter(
          (item : any) => item.completed === true
        ));
        break;

      case 'uncompleted':
        setfToDoList(toDoList.filter(
          (item : any) => item.completed === false
        ));
        break;

      default:
        setfToDoList(toDoList);
        break;
    }
  };

  useEffect(() => {
    getLocalToDos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalToDos();
  }, [status, toDoList]);

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
      inputText={inputText}
      setInputText={setInputText} 
      toDoList={toDoList}
      setToDoList={setToDoList}
      setStatus={setStatus} />      
      <ToDoContainer 
      setToDoList={setToDoList}
      toDoList={toDoList}
      ftoDoList={ftoDoList} />
    </div>
  );
}

export default App;
