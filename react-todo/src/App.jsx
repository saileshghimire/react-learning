import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todo} from './Todos'

let count=5;

function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title:"Gym",
    description:"Go to the Gym everyday expect saturday"
  },
{
  id:2,
  title:"Code",
  description:"Do coding 8 hours a day"
},
{
  id:3,
  title:"Code-Code",
  description:"Do coding 8 hours a day"
},{
  id:4,
  title:"Coding",
  description:"Do coding 8 hours a day"
}
]);


function addTodo(){
  setTodos([...todos,{
    id:count++,
    title:Math.random(),
    description: Math.random()
  }])
}

  return (
    <>
    <button onClick={addTodo}>Add todo</button>
      {todos.map(function(todo){
        return(
        <Todo key={todo.id} title={todo.title} description={todo.description} />
        )
      })}
    </>
  )
}

export default App
