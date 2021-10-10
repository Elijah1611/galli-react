import React from 'react'
import { Link } from 'react-router-dom'

const MapButton = ({ image, title, link }) => {
    return (
        <Link to={link}>
            <div className="relative shadow-xl">
                <img
                    className="object-cover w-full"
                    src={image}
                    alt={title}
                />
                <h1 className="absolute ml-auto mr-auto left-0 right-0 top-1/2 text-center text-white font-inter font-bold text-5xl">{title}</h1>
            </div>
        </Link>
    )
}

export default MapButton
