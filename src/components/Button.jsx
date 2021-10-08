import React from 'react'

const Button = ({ text }) => {
    return (
        <button className="font-inter font-bold shadow-xl px-12 py-4 rounded-2xl">
            {text}
        </button>
    )
}

export default Button
