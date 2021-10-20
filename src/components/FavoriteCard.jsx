import React from 'react'
import Moment from 'react-moment';

import ProfileBubble from '../components/ProfileBubble'
import { AiFillClockCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const FavoriteCard = ({ id, post_id, image, title, avatar, username, hearts, favDate }) => {
    console.log(avatar)

    return (
        <div className="flex flex-row-reverse gap-4 px-5 mb-20">
            <div className="relative rounded-xl">
                <div className="flex justify-center items-center gap-1 mt-2">
                    <AiFillClockCircle />
                    <h3 className="font-inter font-bold">
                        <Moment fromNow>{favDate}</Moment>
                    </h3>
                </div>

                <Link to={`/post/${post_id}`}>
                    <img className="rounded-xl" src={image} alt={title} />
                </Link>

                <Link to={`/profile/${username}`}>
                    <div className="absolute bottom-[-3.7rem] ml-auto mr-auto right-0 left-0 z-10">
                        <ProfileBubble avatar={avatar} username={username} hearts={hearts} />
                    </div>
                </Link>
            </div>
        </div >
    )
}

export default FavoriteCard
