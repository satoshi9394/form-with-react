import React from 'react'



const Button = props => {
    return(
        <button className="waves-effect waves-light btn"
        onClick={props.action}>
            <span>{props.title}</span>
            <i className="material-icons right">send</i>
        </button>
    )
}

export default Button