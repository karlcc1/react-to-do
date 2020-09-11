import React, { useState } from 'react';
import Header from './Components/Header';
import ToDoContainer from './Components/ToDoContainer';
import Form from './Components/Form';
import './App.css';

function App() {
  // const []

  return (
    <div className="App">
      <Header />
      <Form />
      <ToDoContainer />
    </div>
  );
}

export default App;
