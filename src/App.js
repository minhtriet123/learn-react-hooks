import { useState } from "react";
import "./App.scss";

import ToDoList from "./Components/ToDoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);
  function handleClickTodo(todo){
    console.log(todo);
    const index = todoList.findIndex( x => x.id === todo.id);
    if (index < 0 ) return;
    const newList = [...todoList];
    newList.splice(index,1);
    setTodoList(newList);
  }
  return (
    <div className="app">
      <h1> To do List</h1>
      <ToDoList todos={todoList} onTodoClick={handleClickTodo}/>
    </div>
  );
}

export default App;
