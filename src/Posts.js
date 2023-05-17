import { BiMaleFemale } from "react-icons/bi"

export function Post(){
    return(
        <button onClick={
            () => {
                alert('loading files')
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(data => console.log(data))
            }}><BiMaleFemale/> GET</button>
    )
};