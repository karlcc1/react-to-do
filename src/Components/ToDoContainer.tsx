import React from 'react';
import ToDoCard from './ToDoCard';

function ToDoContainer(props : any) {
    return (
        <div style={{border: "1px solid black"}}>
            <h1>ToDoContainer</h1>
            <div className="todo-container">
                        {props.toDoList.map((item : any) => (
                            <ToDoCard setToDoList={props.setToDoList} toDoList={props.toDoList} key={item.id} item={item}/>
                    ))}
            </div>
        </div>
    )
}

export default ToDoContainer;