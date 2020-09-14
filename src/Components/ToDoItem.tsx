import React from 'react';

function ToDoItem(props : any) {

    const delItem = () => {
        props.setToDoList(props.toDoList.filter((el : any) => (el.id !== props.item.id)));
    };

    return (
        <div className="todo">
            <li className="todo-item">{props.item.text}</li>
            <button onClick={delItem} className="trash-btn">
                <i className="fas fa-trash" />
            </button>
        </div>
    );
}

export default ToDoItem;