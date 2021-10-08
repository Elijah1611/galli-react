import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

const ProfileBubble = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <h3 className="font-inter font-bold">ChiChi</h3>

                <img className="rounded-full w-20" src="https://i.pravatar.cc/300?img=31" alt="ChiChi" />

                <div className="text-red-500 flex justify-center items-center mt-1">
                    <AiFillHeart size="1rem" className="drop-shadow-xl" />
                    <h4 className="font-inter font-bold">534k</h4>
                </div>
            </div>
        </div>
    )
}

export default ProfileBubble
