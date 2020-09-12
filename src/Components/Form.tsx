import React from 'react';
import { ChangeEvent } from 'react';

function Form(props : any) {

    const inputTextHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        props.setInputText(e.target.value);
    };

    const onButtonClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // props.setToDoList(props.toDoList.concat(props.inputText));

        props.setToDoList([...props.toDoList, {text: props.inputText, completed: false, id: Math.random()*100}]);
        props.setInputText("");
    };

    const clearButtonClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        console.log("clear button");
        e.preventDefault();
        props.setToDoList([]);
    };

    return (
        <div style={{border: "1px solid black"}}>
            <h1>Form</h1>
            <form>
                <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={onButtonClick} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
                <button onClick={clearButtonClick} type="submit">clear</button>
            </form>
            <h1>{props.inputText}</h1>
        </div>
    )
}

export default Form;