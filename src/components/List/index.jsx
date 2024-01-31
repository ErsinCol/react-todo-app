import classNames from "classnames";

function List({displayList, todoList, setTodoList}){

    const toggleTodo = ({id}) => {
        const updatedList = todoList.map((todo)=> todo.id === id ? {...todo, completed: !todo.completed} : todo)
        setTodoList(updatedList)
    }

    const handleDestroy = ({id}) => {
        const updatedList = todoList.filter(todo => todo.id !== id)
        setTodoList(updatedList)
    }

    return (
        <ul className="todo-list">
            {
                displayList.map((todo) => (
                    <li className={classNames({'completed': todo.completed})} key={todo.id}>
                        <div className="view">
                            <input className="toggle" type="checkbox" checked={todo.completed}
                                   onChange={() => toggleTodo(todo)}/>
                            <label>{todo.label}</label>
                            <button className="destroy" onClick={() => handleDestroy(todo)}></button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default List;