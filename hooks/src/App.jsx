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
  const [todo,setTodo] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    .then(response => {
      setTodo(response.data.todo);
    })
  },[id])

  return(
    <>
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
    </>
  )
}

function App(){
  const [todoID, setTodoId] = useState(1);

function clickHander(id){
  setTodoId(id);
}
  return(
    <>
    <button onClick={function(){
      setTodoId(1)
    }}>1</button>
    <button onClick={function(){
      setTodoId(2)
    }}>2</button>
    <button onClick={function(){
      setTodoId(3)
    }}>3</button>
    <button onClick={() => clickHander(4)}>4</button>
    <Todo id ={todoID} />
   </>

  //  <>
  //   <Todo id ={3}></Todo>
  //   </>
  )
}

export default App
