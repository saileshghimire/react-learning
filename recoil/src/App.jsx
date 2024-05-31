import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
// import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atom'
import { notifications, totalNotificationSelector } from "./atom";
import axios from 'axios';


function App() {
  return(
    <>
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
    </>
  )
}

// function MainApp(){
//   const networkNotificationCount = useRecoilValue(networkAtom);
//   const jobsNotificationCount = useRecoilValue(jobsAtom);
//   const messageNotificationCount  = useRecoilValue(messagingAtom);
//   const notificationNotificationCount = useRecoilValue(notificationAtom);
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);

//   return (
//     <>
//     <button>Home</button>
//     <button>My network({(networkNotificationCount >= 100) ?"99+": networkNotificationCount})</button>
//     <button>Jobs ({(jobsNotificationCount >=100)?"99+":jobsNotificationCount})</button>
//     <button>Messages ({(messageNotificationCount >=100)?"99+":messageNotificationCount})</button>
//     <button>Notification({(notificationNotificationCount >=100)?"99+":notificationNotificationCount})</button>
//     <button>Me({totalNotificationCount})</button>
//     </>
//   )
// }

function MainApp(){
  const [notificationCount , setNotificationCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);



  return(
    <>
    <button>Home</button>
     <button>My network({(notificationCount.network >= 100) ?"99+": notificationCount.network})</button>
     <button>Jobs ({(notificationCount.jobs >=100)?"99+":notificationCount.jobs})</button>
     <button>Messages ({(notificationCount.messaging >=100)?"99+":notificationCount.messaging})</button>
     <button>Notification({(notificationCount.notifications >=100)?"99+":notificationCount.notifications})</button>
     <button>Me({totalNotificationCount})</button>
    </>
  )
}

export default App
