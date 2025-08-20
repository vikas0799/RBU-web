import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Timer() {
    const [count, setCount] = useState(0);
    const [x, setX] = useState(0);
    const [name, setName] = useState("vikas patel");

    // useEffect(()=>{},[]);
    useEffect(() => {
        setTimeout(() => {
            setCount( count + 1);
            setX( x + 5);
            console.log("hii ");
            console.log("bye ");    
        }, 1000);
    },[name]);

    return (<>
        <h1>I've rendered {count} times!</h1>
        <p>Lorem ipsum dolor sit amet </p>
        <h1>{x}</h1>
        <h1>{name}</h1>
        <button onClick={()=>{setName("bandna")}}>click me</button>
    </>)
}

export default Timer;