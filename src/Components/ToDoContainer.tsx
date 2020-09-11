import React, { useState } from 'react';

function ToDoContainer() {
    return (
        <div style={{border: "1px solid black"}}>
            <h1>ToDoContainer</h1>
            <div className="todo-container">
                <ul className="todo-list"></ul>
            </div>
        </div>
    )
}

export default ToDoContainer;