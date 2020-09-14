import React, { useState, useEffect } from 'react';
import ToDoItems from './ToDoItems';
import './ToDoCard.css';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const modalStyles = {
    content: {
        margin: "auto",
        height: "500px",
        width: "500px",
        transition: "1s"
    }
}

function ToDoCard(props: any) {
    const [inputText, setInputText] = useState("");
    const [titleChange, setTitleChange] = useState(props.item.title);
    const [toDoArr, setToDoArr] = useState([] as string[]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        getLocalToDoItems();
      }, []);
    
    useEffect(() => {
        saveLocalToDoItems();
      }, [toDoArr]);

    const itemClick = () => {
        setModalOpen(true);
    };

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setToDoArr([...toDoArr, inputText]);
            setInputText("");
        }
    };

    const saveLocalToDoItems = () => {
        localStorage.setItem(`toDoArr_${props.item.title}`, JSON.stringify(toDoArr));
    };

    const getLocalToDoItems = () => {
        if (localStorage.getItem(`toDoArr_${props.item.title}`) === null) {
            localStorage.setItem(`toDoArr_${props.item.title}`, JSON.stringify([]));
        } else {
            let parsedLocal = localStorage.getItem(`toDoArr_${props.item.title}`);
            let toDoLocal = JSON.parse(parsedLocal!);
            setToDoArr(toDoLocal);
        }
    };

    const deleteFromLocal = () => {
        localStorage.setItem(`toDoArr_${props.item.title}`, JSON.stringify([]));
    };

    const deleteList = () => {
        console.log("deletelist " + props.item.title);
        deleteFromLocal();
        const newArr = props.toDoList.filter((x : any) => (x.title !== props.item.title));      
        props.setToDoList(newArr);
    };

    const titleChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        setTitleChange(e.target.value);
        
        const newArr = props.toDoList.map((item : any) => {
            if (item.id === props.item.id) {
                return item.title = e.target.value
            }
        });
        props.setToDoList();
    };

    return (
        <div>
            <div className="todo-card" onClick={itemClick}>
                <h2>{titleChange}</h2>
                <ToDoItems toDoArr={toDoArr} />
            </div>
            <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} style={modalStyles}>
                <input onChange={titleChangeHandler} value={titleChange}/><button onClick={deleteList}>x</button>
                <ul>
                    <ToDoItems 
                    toDoArr={toDoArr}
                    setToDoArr={setToDoArr} />
                </ul>
                <input onKeyPress={handleKeyPress} onChange={inputHandler} value={inputText} type="text" />
            </Modal>
        </div>
    );
}

export default ToDoCard;