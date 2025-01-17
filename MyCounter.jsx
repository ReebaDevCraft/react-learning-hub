import React from "react";
import useCount from "./useCount.js";
const MyCounter = () => {  
      const [count, increment, decrement] = useCount(0);
        return (
          <>
          <h1>MyCounter App</h1>
          <h3>Count{count}</h3>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
      
          </>
        )
    }
export default MyCounter;