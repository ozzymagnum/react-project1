import React from "react";
import { useState } from "react";

export default function Counter(){
    const [counter, setCounter] = useState(0);

        const handeClick1 = () => {
            setCounter(counter + 1);

        }

        const handeClick2 = () => {
            setCounter(counter - 1);

        }
    return (

        <div>

            <h1>Counter App</h1>
            <button onClick={handeClick2}>Decreament</button>
            <div style={{fontSize:50}}>{counter}</div>
            <button onClick={handeClick1}>Increament-1</button>

            <button onClick={() => setCounter(counter +1)}>Increament-2</button>

            </div>
    )
}