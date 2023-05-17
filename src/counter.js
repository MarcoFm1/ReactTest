import { useState } from "react";

export function Counter(){
    
    const [counter, setCounter] = useState(0);

    if(counter < -5 || counter > 10) {
        return(
            <h1>No se puede mas de esto</h1>
        )
    }

    return(
        <div> 
            <hr/>
            <h1>PRO COUNTER = {counter}</h1>
            <button onClick={() => {
                setCounter(counter + 1);
            }}>+</button>

            <button onClick={() => {
                setCounter(counter - 1);
            }}>-</button>
        </div>
    )
}