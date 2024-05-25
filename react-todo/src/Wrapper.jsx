export function CardWrapper({children}){
 return(
    <div style={{border:"2px solid black", padding:20}}>
        {children}
    </div>
 )
}

export function TextComponent({text}){
    return(
        <>
        {text}
        </>
    )
}
