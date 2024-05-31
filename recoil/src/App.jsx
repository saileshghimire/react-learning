import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom } from './atom'

function App() {
  return(
    <>
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
    </>
  )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messageNotificationCount  = useRecoilValue(messagingAtom);
  const notificationNotificationCount = useRecoilValue(notificationAtom);

  return (
    <>
    <button>Home</button>
    <button>My network({(networkNotificationCount >= 100) ?"99+": networkNotificationCount})</button>
    <button>Jobs ({(jobsNotificationCount >=100)?"99+":jobsNotificationCount})</button>
    <button>Messages ({(messageNotificationCount >=100)?"99+":messageNotificationCount})</button>
    <button>Notification({(notificationNotificationCount >=100)?"99+":notificationNotificationCount})</button>
    </>
  )
}

export default App
