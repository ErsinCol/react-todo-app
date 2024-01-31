function MarkAll({todoList, setTodoList}){
    const markAll = () => {
        const isAllCompleted = todoList.every(todo => todo.completed)

        const updatedList = todoList.map((todo)=> {
            return {
                ...todo,
                completed: !isAllCompleted
            }
        })

        setTodoList(updatedList)
    }

    return (
        <div className="mark-all-container">
            <input id="toggle-all" className="toggle-all" type="checkbox" checked={todoList.every(todo => todo.completed)} onChange={markAll}/>
            <label htmlFor="toggle-all">
                Mark all as {todoList.every(todo => todo.completed) ? 'incomplete' : 'complete'}
            </label>
        </div>
    )
}

export default MarkAll;