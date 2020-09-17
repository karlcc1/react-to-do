import React from 'react';

function Form(props : any) {

    const titleHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        props.setInputTitle(e.target.value);
    };

    const onButtonClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault();
        // props.setToDoList([...props.toDoList, {ToDoListID: Math.random()*100, Title: props.inputTitle}]);

        fetch(`http://localhost:9000/toDoList/${props.inputTitle}`, {
            method: 'POST'
        });

        props.setInputTitle("");
    };

    return (
        <form>
            <input value={props.inputTitle} onChange={titleHandler} type="text" className="todo-input" />
            <button onClick={onButtonClick} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    )
}

export default Form;