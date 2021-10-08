import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

const FavoriteButton = () => {
    return (
        <div className="text-red-500 flex justify-center items-center mt-1">
            <AiFillHeart size="1rem" className="drop-shadow-xl" />
            <h4 className="font-inter font-bold">534k</h4>
        </div>
    )
}

export default FavoriteButton
