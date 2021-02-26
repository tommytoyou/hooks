
import { useState, useEffect } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(props.initialNumber)

// useState always returns an array, the first value is the state
// the second value is the updater-function


function subtract() {
    setCount(count -1 )
}

// this will run on first mount
// this will also run on every update
useEffect(() => {
    console.log('hello');
})
// If you pass an empty array it acts like ComponentDismount
//just runs once
useEffect(() => {
    console.log('only on the mount');
}, [])
    return(
        <>
            <h1>Cool Kid's Counter</h1>
            <p>{count}</p>
       <button onClick={()=> setCount( count + 1)}>Add</button>
       <button onClick={subtract}>Subtract</button>
        </>
    )
}
export default Counter