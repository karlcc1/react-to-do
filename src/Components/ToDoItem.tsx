import React from 'react';

function ToDoItem(props : any) {

    const delItem = () => {
        props.setToDoList(props.toDoList.filter((el : any) => (el.id !== props.item.id)));
    };

    const completeItem = () => {
        props.setToDoList(props.toDoList.map(
            (el : any) => {
                if (el.id === props.item.id) {
                    return {
                        ...el, completed: !props.item.completed
                    }
                }
                return el;
            }
        ))
    }; 

    return (
        <div className="todo">
            <li className={`todo-item ${props.item.completed ? "completed" : ""}`}>{props.item.text}</li>
            <button onClick={completeItem} className="complete-btn">
                <i className="fas fa-check" />
            </button>
            <button onClick={delItem} className="trash-btn">
                <i className="fas fa-trash" />
            </button>
        </div>
    );
}

export default ToDoItem;