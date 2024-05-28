import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Dashboard } from "./component/DashBoard";
import { Landing } from "./component/Landing";

function App(){
  const navigate = useNavigate();
  return(
    <>
    <div>
       <button onClick={()=>{
        navigate("/");
       }}>Landing page</button>

       <button onClick={()=>{
        navigate("/dashboard");
       }}>Dashboard</button>
    </div>
    <hr />

    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/" element={<Landing></Landing>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}




export default App