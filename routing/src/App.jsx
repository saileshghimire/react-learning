import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import { Dashboard } from "./component/DashBoard";
const Dashboard = lazy( () => import('./component/DashBoard'));
import { Landing } from "./component/Landing";

function App(){
  return(
    <>
    <BrowserRouter>
    <AppBar></AppBar>
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard></Dashboard></Suspense>}></Route>
        <Route path="/" element={<Landing></Landing>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

function AppBar(){
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
    </>
  )
}



export default App