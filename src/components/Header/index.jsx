import {useState} from "react";

function Header({todoList, setTodoList}){
    const [newTodo, setNewTodo] = useState("");

    const onSubmitForm = (event) => {
        event.preventDefault();

        if(newTodo === ""){
            return false
        }

        setTodoList([
            {
                id: todoList.length + 1,
                label: newTodo,
                completed: false,
            },
            ...todoList
        ])

        setNewTodo("");
    }

    return (
        <header className="header">
            <h1>Todos</h1>
            <form onSubmit={onSubmitForm}>
                <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className="new-todo"
                       placeholder="What needs to be done?" autoFocus/>
            </form>
        </header>
    )
}

export default Header;