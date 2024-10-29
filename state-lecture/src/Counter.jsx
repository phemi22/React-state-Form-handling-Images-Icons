import { useState } from "react"

function Counter(){
    const [count, setCount] = useState(0)

    const countManager = ()=>{
        setCount(count+1)
    }

    const resetManager = ()=>{
        setCount(count*0)
    }

    return(
        <div>
            <h1>Count Value : {count}</h1>
            <button onClick={countManager}>Count</button>
            <button onClick={resetManager}>Reset</button>
        </div>
    )
}

export default Counter