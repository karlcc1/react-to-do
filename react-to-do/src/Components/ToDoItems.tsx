import React from 'react';

function ToDoItems(props : any) {

    const passModal = 
        <ul>
            {
                props.toDoArr && props.toDoArr.map((item : string) => (
                    <li key={item}>{item}<button onClick={() => delItem(item)} name={item} className="item-del">&#x00D7;</button></li>
                ))
            }
        </ul>;

    const passCard = 
        <ul>
            {
                props.toDoArr && props.toDoArr.slice(0,8).map((item : string) => (
                    <li key={item}>{item}</li>
                ))
            }
        </ul>;

    const delItem = (s : string) => {
        console.log("delete " + s);  
        const newArr = props.toDoArr.filter((x : string) => (x !== s));      
        props.setToDoArr(newArr);
    };



    return (props.isModal ? passModal : passCard);
}

export default ToDoItems;