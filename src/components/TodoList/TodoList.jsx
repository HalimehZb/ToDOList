import React, { useState } from 'react';
import Header from './Header';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [todoTitle, setTodoTitle] = useState('');
    const [status, setStatus] = useState('all');

    const todoTitleHandler = (event) => {
        setTodoTitle(event.target.value);
    };

    const addTodo = (event) => {
        event.preventDefault();

        const newTodoObject = {
            id: todos.length + 1,
            title: todoTitle,
            completed: false
        };

        setTodos(prevTodos => [...prevTodos, newTodoObject]);
        setTodoTitle('');
    };

    const removeTodo = (todoId) => {
        const newTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(newTodos);
    };

    const editTodo = (todoId) => {
        const newTodos = todos.map(todo => {
            if (todo.id === todoId) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const statusHandler = (event) => {
        setStatus(event.target.value);
    };

    return (
        <>
            <Header />
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    className="todo-input"
                    maxLength="60"
                    value={todoTitle}
                    onChange={todoTitleHandler}
                />
                <button className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo" onChange={statusHandler}>
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>

            <div className="todo-container">
                <ul className="todo-list">
                    {status === "completed" && todos.filter(todo => todo.completed).map(todo => (
                        <Todo key={todo.id} {...todo} onRemove={removeTodo} onEdit={editTodo} />
                    ))}
                    {status === "uncompleted" && todos.filter(todo => !todo.completed).map(todo => (
                        <Todo key={todo.id} {...todo} onRemove={removeTodo} onEdit={editTodo} />
                    ))}
                    {status === "all" && todos.map(todo => (
                        <Todo key={todo.id} {...todo} onRemove={removeTodo} onEdit={editTodo} />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default TodoList;