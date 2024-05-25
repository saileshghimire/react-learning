import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todo} from './Todos'

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
  id:4,
  title:"Code-Code",
  description:"Do coding 8 hours a day"
},{
  id:5,
  title:"Coding",
  description:"Do coding 8 hours a day"
}
])

  return (
    <>
      <Todo></Todo>
    </>
  )
}

export default App
