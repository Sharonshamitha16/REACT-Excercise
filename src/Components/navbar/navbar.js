import React, { useState } from "react";
// this can be given or not given not neccesssary 
import './navbar.css'
function Navbar(){
// usestate is use to track the changes made by the user  it's a property of hooks
    const [count,setCount ]=useState(0)

    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    return (
        <div className ='nav'>
            <h1>Counter:{count}</h1>
            <button onClick={increment}> +</button>
            <button onClick={decrement}> -</button>
        
        </div>
    )
}
export default Navbar

// rcc--class
// rfce-- react  export functional
// rafc --react arrow function
