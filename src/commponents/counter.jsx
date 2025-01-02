 import React, { useEffect, useState } from 'react'
 
 const Counter = ({target}) => {
    const [count, setCount] = useState(0);
 
  
    useEffect(() => {
      if (count < target) {
        const timer = setTimeout(() => {
          setCount((prevCount) => prevCount + 1);
        }, 100); // Adjust the timeout as needed
  
        return () => clearTimeout(timer); // Cleanup the timer on component unmount
      }
    }, [count, target]);
   return (
     <>
       <span className="counter-value">{count}</span>
     </>
   )
 }
 
 export default Counter
 