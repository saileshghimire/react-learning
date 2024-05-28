import { useContext, useState } from "react"
import { CountContext } from "./context";


function App(){
  const [count, setCount] = useState(0);

  return(
    <>
    <CountContext.Provider value={count}>
    <Count setCount={setCount} />
    </CountContext.Provider>
    </>
  )


}


function Count({count, setCount}){
  return(
    <>
    <CountRender />
    <Button setCount={setCount} />
    </>
  );
}

function CountRender(){
  const count = useContext(CountContext);
  return(
    <>
    {count}
    </>
  )
}

function Button({setCount}){
  const count = useContext(CountContext);
  return(
  <>
  <button onClick={() =>{
    setCount(count +1);
  }}>Increase</button>
  
  <button onClick={() =>{
    setCount(count -1)
  }}>Descrease</button>
  </>
  );
}

export default App