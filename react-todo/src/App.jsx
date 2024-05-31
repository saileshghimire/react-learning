// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { Todos} from './Todos'
// import { CardWrapper, TextComponent } from './Wrapper'
// import { useEffect } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atom';


// let count=5;

// function App() {
//   const [todos, setTodos] = useState([{
//     id:1,
//     title:"Gym",
//     description:"Go to the Gym everyday expect saturday"
//   },
// {
//   id:2,
//   title:"Code",
//   description:"Do coding 8 hours a day"
// },
// {
//   id:3,
//   title:"Code-Code",
//   description:"Do coding 8 hours a day"
// },{
//   id:4,
//   title:"Coding",
//   description:"Do coding 8 hours a day"
// }
// ]);


// function addTodo(){
//   setTodos([...todos,{
//     id:count++,
//     title:Math.random(),
//     description: Math.random()
//   }])
// }

//   return (
//     <>
//     <button onClick={addTodo}>Add todo</button>
//       {todos.map(function(todo){
//         return(
//         <Todo key={todo.id} title={todo.title} description={todo.description} />
//         )
//       })}
//     </>
//   )
// }


//  wrapper concept

// function App(){
//   return(
//     <div>
//     <CardWrapper>
//       <div>hi</div> 
//       <div>hello</div>
//     </CardWrapper>
//     <br />
//     <CardWrapper>
//       hi
//       <div>hello</div>
//       <CardWrapper>
//       <TextComponent text="sailesh Ghimire"></TextComponent>
//     </CardWrapper>
//     </CardWrapper>
    
//     </div>
//   )
   
// }


// useEffect mount the code. mount means rendering for only once
//  for multiple rendering we have to set timer



function App() {
  return(
    <>
    <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
  </RecoilRoot>
    </>
  )
}

function Todo({id}) {
   const currentTodo = useRecoilValue(todosAtomFamily(id));
   if (!currentTodo) {
    return <div>Todo not found</div>;
  }
  return (
    <>
    <div>{currentTodo.title}</div>
    <div>{currentTodo.description}</div>
    <br />
  </>
  )
}











export default App
