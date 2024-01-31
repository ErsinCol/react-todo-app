function Count({activeTodos}){
    return (
        <span className="todo-count">
            <strong>{activeTodos.length} </strong>
            items left
        </span>
    )
}

export default Count;