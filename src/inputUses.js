import { useState, useEffect } from "react";

export function InputSave () {

    const [message, setMessage] = useState('');

    useEffect(() => {
        console.log('gay');
    })

    return(
        
        <div>
            <hr/>
            <input onChange={e => setMessage(e.target.value)}/>
            <button onClick={
                () => {
                    alert(`La frase que pusiste es: "${message}"`)
                }
            }>Save</button>
        </div>
    )
}   