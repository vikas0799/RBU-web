import React from 'react';
import Card from './Card';

const Navbar = () => {
    return (
        <div>
            <ul style={{display:"flex", gap:"20px"}}>
                <a href="Home.jsx">Home</a>
                <a href="About.jsx">about</a>
                <a href="Services.jsx">services</a>
                <a href="Feedback.jsx">feedback</a>

            </ul>
            <Card/>
            <Card/>
            <Card/>

        </div>
    );
}

export default Navbar;
