import React from 'react';

function Form(props : any) {

    const titleHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.target.value);
    };

    const onButtonClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.setToDoList([...props.toDoList, {id: Math.random()*100, title: props.title, content: []}]);
        props.setTitle("");
    };

    return (
        <div style={{border: "1px solid black"}}>
            <h1>Form</h1>
            <form>
                <input value={props.title} onChange={titleHandler} type="text" className="todo-input" />
                <button onClick={onButtonClick} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </form>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Form;