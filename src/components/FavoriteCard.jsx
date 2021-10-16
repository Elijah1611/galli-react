import React from 'react'
import Moment from 'react-moment';

import ProfileBubble from '../components/ProfileBubble'
import { AiFillClockCircle } from 'react-icons/ai'

const FavoriteCard = ({ image, title, avatar, username, hearts, postDate, }) => {
    console.log(avatar)
    return (
        <div className="flex flex-row-reverse gap-4 px-5 mb-20">
            <div className="relative rounded-xl">
                <div className="flex justify-center items-center gap-1 mt-2">
                    <AiFillClockCircle />
                    <h3 className="font-inter font-bold">
                        <Moment fromNow>{postDate}</Moment>
                    </h3>
                </div>

                <img className="rounded-xl" src={image} alt={title} />

                <div className="absolute bottom-[-3.7rem] ml-auto mr-auto right-0 left-0 z-10">
                    <ProfileBubble avatar={avatar} username={username} hearts={hearts} />
                </div>
            </div>
        </div >
    )
}

export default FavoriteCard
