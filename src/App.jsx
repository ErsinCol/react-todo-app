import {useEffect, useState} from "react";
import classNames from "classnames";

function App() {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            label: "Learn Javascript",
            completed: true,
        },
        {
            id: 2,
            label: "Learn React",
            completed: false
        },
        {
            id: 3,
            label: "Have a life!",
            completed: false
        }
    ]);

    const [displayList, setDisplayList] = useState(todoList);

    const [newTodo, setNewTodo] = useState("");

    const [currentTab, setCurrentTab] = useState("all");

    const activeTodos = todoList.filter(todo => !todo.completed)

    const completedTodos = todoList.filter(todo => todo.completed)

    useEffect(()=>{
        if(currentTab === "all"){
            setDisplayList(todoList)
        }else if(currentTab === "active"){
            setDisplayList(activeTodos)
        }else if(currentTab === "completed"){
            setDisplayList(completedTodos)
        }
    }, [currentTab, todoList, activeTodos, completedTodos])

    const toggleTodo = (id) => {
        const updatedList = todoList.map((todo)=>{
            if(todo.id === id){
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })

        setTodoList(updatedList)
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        setTodoList([
            {
                label: newTodo,
                completed: false,
            },
            ...todoList
        ])
        setNewTodo("");
    }

    const handleDestroy = (id) => {
        const updatedList = todoList.filter(todo => todo.id !== id)
        setTodoList(updatedList)
    }

    const clearCompleted = () => {
        setTodoList(activeTodos)
    }

    const markAll = () => {
        const isAllCompleted = todoList.every(todo => todo.completed)

        if(isAllCompleted){
            const updatedList = todoList.map((todo)=> {
                return {
                    ...todo,
                    completed: false
                }
            })
            setTodoList(updatedList)
        }else{
            const updatedList = todoList.map((todo)=>{
                return {
                    ...todo,
                    completed: true
                }
            })
            setTodoList(updatedList)
        }
    }

    return (
        <>
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <form onSubmit={onSubmitForm}>
                        <input value={newTodo} onChange={(e)=> setNewTodo(e.target.value)} className="new-todo" placeholder="What needs to be done?" autoFocus/>
                    </form>
                </header>

                <section className="main">
                    <input className="toggle-all" type="checkbox"/>
                    <label htmlFor="toggle-all" onClick={markAll}>
                        Mark all as complete
                    </label>

                    <ul className="todo-list">
                        {
                            displayList.map((todo,index)=> (
                                <li className={classNames({'completed': todo.completed})} key={index}>
                                    <div className="view">
                                        <input className="toggle" type="checkbox" checked={todo.completed} onChange={()=> toggleTodo(todo.id)}/>
                                        <label>{todo.label}</label>
                                        <button className="destroy" onClick={()=> handleDestroy(todo.id)}></button>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </section>

                <footer className="footer">
                    <span className="todo-count">
                        <strong>{activeTodos.length} </strong>
                        items left
                    </span>

                    <ul className="filters">
                        <li onClick={()=> setCurrentTab("all")}>
                            <a href="#/" className={classNames({'selected': currentTab === "all"})}>All</a>
                        </li>
                        <li onClick={()=> setCurrentTab("active")}>
                            <a href="#/" className={classNames({'selected': currentTab === "active"})}>Active</a>
                        </li>
                        <li onClick={()=> setCurrentTab("completed")}>
                            <a href="#/" className={classNames({'selected': currentTab === "completed"})}>Completed</a>
                        </li>
                    </ul>

                    {
                        todoList.length !== activeTodos.length && (
                            <button className="clear-completed" onClick={clearCompleted}>
                                Clear completed
                            </button>
                        )
                    }
                </footer>
            </section>
        </>
    )
}

export default App
