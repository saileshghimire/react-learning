import { useState, memo } from "react";


// export function HeaderWithButton(){
//     const [firstTitle, setFirstTitle] = useState("My name is Sailesh Ghimire");

//     function changeTitle(){
//         setFirstTitle("My name is " + Math.random());
//     }

//     return(
//         <>
//         <button onClick={changeTitle}>Click here to change name </button> <br />
//         <Header title={firstTitle}></Header>
//         </>
//     )
// }

// export function Header({title}){
//     return(
//         <>
//         {title}
//         </>
//     )
// }

// using memo


function HeaderWithButton() {
    const [firstTitle, setFirstTitle] = useState("My name is Sailesh Ghimire");

    function changeTitle() {
        setFirstTitle("My name is " + Math.random());
    }

    return (
        <>
            <button onClick={changeTitle}>Click here to change name</button> <br />
            <Header title={firstTitle}></Header>
        </>
    );
}

function Header({ title }) {
    return (
        <>
            {title}
        </>
    );
}

export const MemoizedHeaderWithButton = memo(HeaderWithButton);
export const MemoizedHeader = memo(Header);

