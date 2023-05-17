import PropTypes from "prop-types"

export function Button({text = 'Undefined', name = 'User'}){
    console.log(text)
    if (!text && !name){
        console.error('Hay un parametro vacio')
    }
    return <button> {text} - {name}</button>
}

Button.prototype = {
    text:  PropTypes.string,
    name: PropTypes.string
}