import React from 'react'

import ProfileBubble from '../components/ProfileBubble'
import { AiFillClockCircle } from 'react-icons/ai'

const FavoriteCard = ({ image, title, avatar, username, hearts, postDate, }) => {
    return (
        <div className="flex flex-row-reverse gap-4 px-5 mb-10">
            <div className="rounded-xl">
                <img className="rounded-xl" src={image} alt={title} />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div>
                    <ProfileBubble avatar={avatar} username={username} hearts={hearts} />
                </div>

                <div className="flex justify-center items-center gap-1 mt-2">
                    <AiFillClockCircle />
                    <h3 className="font-inter font-bold">{postDate}</h3>
                </div>
            </div>
        </div>
    )
}

export default FavoriteCard
