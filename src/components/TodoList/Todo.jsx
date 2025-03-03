import React from 'react';

const Todo = ({ id, title, completed, onRemove, onEdit }) => {
    const removeClickHandler = () => {
        onRemove(id);
    };

    const editClickHandler = () => {
        onEdit(id);
    };

    return (
        <div className={`todo ${completed ? 'completed' : ''}`} style={{ display: 'flex' }}>
            <li className="todo-item">{title}</li>

            <button className="check-btn" onClick={editClickHandler}>
                <i className="fas fa-check" aria-hidden="true"></i>
            </button>

            <button className="trash-btn" onClick={removeClickHandler}>
                <i className="fas fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    );
};

export default Todo;