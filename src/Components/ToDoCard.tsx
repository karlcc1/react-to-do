import React, { useState } from 'react';
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

function ToDoCard(props : any) {

    const [modalOpen, setModalOpen] = useState(false);

    const itemClick = () => {
        setModalOpen(true);
    };

    const delItem = () => {
        props.setToDoList(props.toDoList.filter((el : any) => (el.id !== props.item.id)));
    };

    const inputTextHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        props.setInputText(e.target.value);
    };

    const handleKeyPress = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            console.log(e.target);
            
        }
        
    };

    return (
        <div>
            <div className="todo-card" onClick={itemClick}>
                <h2>{props.item.title}</h2>
                <ul>
                    <ToDoItems />
                </ul>
            </div>
             <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)} style={modalStyles}>
                     <h2>{props.item.title}</h2>
                     <input onKeyPress={handleKeyPress} type="text"/>
                 <ul>
                    <ToDoItems item={props.item} />
                 </ul>
             </Modal>
        </div>
    );
}

export default ToDoCard;