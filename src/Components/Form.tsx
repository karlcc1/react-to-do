import React from 'react';

function Form() {
    return (
        <div style={{border: "1px solid black"}}>
            <h1>Form</h1>
            <form>
                <input type="text" className="todo-input" />
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form;