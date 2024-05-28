import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./component/DashBoard";
import { Landing } from "./component/Landing";

function App(){
  return(
    <>
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