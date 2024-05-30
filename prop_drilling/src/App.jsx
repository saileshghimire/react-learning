import { useContext, useState } from "react"
import { CountContext } from "./context";
import { countAtom } from "./store/atoms/count";
import { RecoilRoot, useSetRecoilState, useRecoilValue } from "recoil";


function App(){
  return(
    <>
    <RecoilRoot>
    <Count />
    
    </RecoilRoot>
    
    </>
  )


}


function Count(){
  return(
    <>
    <CountRender />
    <br /><br />
    <Button/><br /><br />
    <EvencountRender />
    </>
  );
}

function CountRender(){
  const count = useRecoilValue(countAtom)
  return(
    <>
    {count}
    </>
  )
}

function EvencountRender(){
  const count = useRecoilValue(countAtom);
  // if(count % 2 == 0){
  //   return( <>It is even number.</>);
  // }
  // else{
  //   return(<>It is odd number.</>)
  // }
  // OR
  return(
  <>
  {(count %2 ==0) ? "It is even": null}
  </>
  );
}

function Button(){
  const setCount = useSetRecoilState(countAtom);
  console.log("re-rendering buttons");
  return(
  <>
  <button onClick={() =>{
    setCount(count =>count +1);
  }}>Increase</button>
  
  <button onClick={() =>{
    setCount(count=>count -1)
  }}>Descrease</button>
  </>
  );
}

export default App