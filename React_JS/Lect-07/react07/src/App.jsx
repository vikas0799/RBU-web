// import { useState,useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0);
//   const [x, setX] = useState(10);


//   function handleevent() {
//     console.log(count);
//     // count=count + 1;
//     // count++;
//     setCount(count+1);
//     // setCount(count+1);
//   }

//   useEffect(() => {
//           // setX(x+2);
//           console.log("hi");
//           console.log("bye");
          
          
//     return () => {
      
//     };
//   });


//   useRef(())
//   return (
//     <>
//       <h1>welcome</h1>
//       <h1>{count}</h1>
//       <h1>{x}</h1>
//       <button onClick={handleevent}>click me</button>
//     </>
//   )
// }

// export default App


// import Card from './Card'
// import React from 'react';

// const App = () => {
//   return (
//     <div>
//       <Card/>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import Navbar from './Navbar';

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './Home';
// import About  from './About';
// import Contact from './Contact';

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Navigation */}  
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/about">About</Link> |{" "}
//         <Link to="/contact">Contact</Link>
//       </nav>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import Info from './Info'

function Info() {
  const { firstname } = useParams();
  return <h1>Hello, {firstname}!</h1>;
}

function display(){

}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/customer/Emil">Emil</Link> | 
        <Link to="/customer/Tobias">Tobias</Link> |
        <Link to="/customer/Linus">Linus</Link> |
        <Link to="/customer/Ashish">Ashish</Link> |
        <Link to="/customer/Bandna">Bandna</Link> 

      </nav>

      <Routes>
        <Route path="/customer/:firstname" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;