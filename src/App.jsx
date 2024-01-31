import {useState} from "react";
import Header from "./components/Header/index.jsx"
import List from "./components/List/index.jsx";
import MarkAll from "./components/MarkAll/index.jsx";
import Tab from "./components/Tab/index.jsx";
import BtnClearCompleted from "./components/BtnClearCompleted/index.jsx";
import Count from "./components/Count/index.jsx";

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

    const activeTodos = todoList.filter(todo => !todo.completed)

    return (
            <section className="todoapp">
                <Header todoList={todoList} setTodoList={setTodoList}/>

                <section className="main">
                    <MarkAll todoList={todoList} setTodoList={setTodoList}/>

                    <List displayList={displayList} todoList={todoList} setTodoList={setTodoList}/>
                </section>

                <footer className="footer">
                    <Count activeTodos={activeTodos}/>

                    <Tab todoList={todoList} setDisplayList={setDisplayList}/>

                    {
                        todoList.length !== activeTodos.length && (
                            <BtnClearCompleted setTodoList={setTodoList} activeTodos={activeTodos}/>
                        )
                    }
                </footer>
            </section>
    )
}

export default App
