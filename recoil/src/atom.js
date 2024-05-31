import { atom, selector } from "recoil";
import axios from 'axios'; 

// using hard code value

// export const networkAtom = atom({
//     key:"networkAtom",
//     default:102
// });

// export const jobsAtom = atom ({
//     key:"jobsAtom",
//     default:0
// });

// export const notificationAtom = atom({
//     key:"notificationAtom",
//     default:12
// });

// export const messagingAtom = atom({
//     key:"messagingAtom",
//     default:0
// }); 

// export const totalNotificationSelector = selector({
//     key:"totalNotificationSelector",
//     get: ({get}) => {
//         const networkAtomCount = get(networkAtom);
//         const jobsAtomCount = get(jobsAtom);
//         const notificationAtomCount = get(notificationAtom);
//         const messagingAtomCount = get(messagingAtom);
//         return (networkAtomCount + jobsAtomCount +notificationAtomCount + messagingAtomCount);
//     }
// })

// using backend call:

export const notifications = atom({
    key:"notificationAtom",
    default :selector({
        key:"notificationsAtomSelector",
        get:async () =>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) =>{
        const allNotification = get(notifications);
        return (allNotification.network + allNotification.jobs + allNotification.notifications + allNotification.messaging);
    }
})