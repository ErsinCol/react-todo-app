import classNames from "classnames";
import {useEffect, useState} from "react";

const tabConfig = {
    all: (todos)=> todos,
    active: (todos) => todos.filter(todo => !todo.completed),
    completed: (todos) => todos.filter(todo => todo.completed),
}

const tabs = [
    {
        name: "all",
        label: "All"
    },
    {
        name: "active",
        label: "Active"
    },
    {
        name: "completed",
        label: "Completed"
    }
]

function Tab({setDisplayList, todoList}){
    const [currentTab, setCurrentTab] = useState("all");

    useEffect(()=>{
        setDisplayList(tabConfig[currentTab](todoList))
    }, [currentTab, todoList])

    return (
        <ul className="filters">
            {
                tabs.map((tab)=> (
                    <li onClick={() => setCurrentTab(tab.name)} key={tab.name}>
                        <a href="#/" className={classNames({'selected': currentTab === tab.name})}>{tab.label}</a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Tab;