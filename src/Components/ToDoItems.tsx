import React from 'react';
import { isTemplateExpression } from 'typescript';

function ToDoItems(props : any) {
    return (
        <div>
            {/* <p>{props.item.content}</p> */}
            {console.log(props.item)}
        </div>
    );
}

export default ToDoItems;