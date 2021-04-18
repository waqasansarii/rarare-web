import React from 'react'
import './btn.css'

const Button = ({className,value,onClick}) => {
    return (
        <div>
            <button onClick={onClick} className={`custom_Button ${className}`} >{value}</button>
        </div>
    )
}

export default Button
