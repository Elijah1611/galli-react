import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import abbreviate from 'number-abbreviate'

const ProfileBubble = ({ hearts, avatar, username }) => {
    console.log(avatar)
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <img className="rounded-full w-12" src={avatar} alt={username} />

                <h3 className="font-inter font-bold text-xs">{username}</h3>

                <div className="text-red-500 flex justify-center items-center mt-1 text-xs">
                    <AiFillHeart size="1rem" className="drop-shadow-xl" />
                    <h4 className="font-inter font-bold">{abbreviate(hearts)}</h4>
                </div>
            </div>
        </div>
    )
}

export default ProfileBubble
