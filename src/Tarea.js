import "./tarea.css";

export function Test({text}){

    return(
        <div className={text ? 'main-pos' : 'main-neg'}>
            <h1>{text ? 'Tarea OwO' : 'Tarea UnU'}</h1>
            <span style={text ? {background:"green"} : {background:'red'}}>
                {text ? 'Tarea Hecha' : 'Tarea Sin hacer'}
            </span>
        </div>
    )
}