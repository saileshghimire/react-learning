import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { HeaderWithButton, Header } from "./Headerwithbtn"

import { MemoizedHeaderWithButton, MemoizedHeader } from "./Headerwithbtn"

// function App() {
//   const [title, setTitle] = useState("Sailesh Ghimire");

//   function updateTitle(){
//     setTitle(Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Update the title</button>
//       <Header title={title}></Header>
//       <Header title="Anwesha Ghimire"></Header>
//       <Header title="Anwesha Ghimire"></Header>
//       <Header title="Anwesha Ghimire"></Header>
//       <Header title="Anwesha Ghimire"></Header>
//       <Header title="Anwesha Ghimire"></Header>
//     </div>
//     // parent div can be removed using <> and </> and can also be used <React.Fragment></React.Fragment>
//     // return statement must return only single element, either <div></div> or <></> .
//   )

//   // function Header(prop){
//   //   return(
//   //     <div>
//   //       {prop.title}
//   //     </div>
//   //   )
//   // }
//   //  can also be written as
//   function Header({title}){
//     return(
//       <div>
//         {title}
//       </div>
//     )
//   } 
// }

//  above acode re-render the entire code but below can re-render particilar code use any two options.

// without using memo re-rendering issue solved

// function App(){
//   return(
//     <>
//     <HeaderWithButton></HeaderWithButton> <br />
//     <Header title="My name is Anwesha Ghimire"></Header>
//     </>
//   )
// }

// with memo re-rendering 

function App(){
  return(
    <>
    <MemoizedHeaderWithButton></MemoizedHeaderWithButton> <br />
    <MemoizedHeader title="My name is Anwesha Ghimire"></MemoizedHeader>
    </>
  )
}

export default App
