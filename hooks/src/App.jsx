import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";
// import { Todos } from "./Todo"


// function App() {
  // const [todos, setTodos] = useState([])

  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/todos")
  //   .then(function(response){
  //     setTodos(response.data.todos )
  //   })
  // },[])
  
  // return (
  //   <>
  //   {todos.map(todo => <Todos key={todo.id} title={todo.title} description={todo.description} />)} 
  //   </>
  // )
 

// }

function Todo({id}){
  const {todo,setTodo} = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos?id=" + id)
    .then(response => {
      setTodo(response.data.todo);
    })
  },[])

  return(
    <>
    <h2>
      {todo.title}
    </h2>
    <h5>
      {todo.description}
    </h5>
    </>
  )
}

function App(){
  return(
    <>
    <Todo id={3}></Todo>
    </>
  )
}

export default App
