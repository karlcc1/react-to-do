import React from 'react';

function ToDoItems(props : any) {

    const delItem = (s : string) => {
        console.log("delete " + s);  
        const newArr = props.toDoArr.filter((x : string) => (x !== s));      
        props.setToDoArr(newArr);
    };

    return (
        <ul>
            {
                props.toDoArr && props.toDoArr.map((item : string) => (
                    <li key={item}>{item}<button onClick={() => delItem(item)} name={item}>x</button></li>
                ))
            }
        </ul>
    );
}

export default ToDoItems;