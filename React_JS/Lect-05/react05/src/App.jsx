import { useState } from 'react'
import './App.css'
import Counter from './components/Counter';
import MyInput from './components/MyInput';


function App() {
    // let [x,setX]=useState(10);
  return (
    <>
    {/* <button onClick={(event)=>{setX(x+1)}}>increase me</button>
    <button onClick={(event)=>{setX(x-1)}}>decrease me</button>

     <h1>welcome to RBU and x={x}</h1>
     <p>{x}</p>
     <p>Lorem ipsum dolor sit amet.</p>
    
     <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto aspernatur impedit non consequatur illum accusantium totam nesciunt veniam mollitia nulla.</h1>
    
    <h1>{x}</h1> */}
    {/* <Counter/> */}
    <MyInput/>
    </>
  )
}

export default App
