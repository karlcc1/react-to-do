import React from 'react';

function Form(props : any) {

    const inputTextHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        props.setInputText(e.target.value);
    };

    const onButtonClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.setToDoList([...props.toDoList, {id: Math.random()*100, text: props.inputText}]);
        props.setInputText("");
    };

    return (
        <div style={{border: "1px solid black"}}>
            <h1>Form</h1>
            <form>
                <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={onButtonClick} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </form>
            <h1>{props.inputText}</h1>
        </div>
    )
}

export default Form;