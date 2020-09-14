import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoContainer(props : any) {
    return (
        <div style={{border: "1px solid black"}}>
            <h1>ToDoContainer</h1>
            <div className="todo-container">
                <ul className="todo-list">
                    {props.ftoDoList.map((item : any) => (
                        <ToDoItem setToDoList={props.setToDoList} toDoList={props.toDoList} key={item.id} item={item}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ToDoContainer;