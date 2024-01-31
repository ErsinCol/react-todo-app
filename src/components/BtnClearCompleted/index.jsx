function BtnClearCompleted({setTodoList, activeTodos}){
    return (
        <button className="clear-completed" onClick={()=> setTodoList(activeTodos)}>
            Clear completed
        </button>
    )
}

export default BtnClearCompleted;