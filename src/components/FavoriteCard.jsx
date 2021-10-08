import React from 'react'

import ProfileBubble from '../components/ProfileBubble'
import { AiFillClockCircle } from 'react-icons/ai'

const FavoriteCard = () => {
    return (
        <div className="flex flex-row-reverse gap-4 px-5 mb-10">
            <div className="rounded-xl">
                <img className="rounded-xl" src="https://images.unsplash.com/photo-1620375376661-464477fbed18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80" alt="Post" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="">
                    <ProfileBubble />
                </div>

                <div className="flex justify-center items-center gap-1 mt-2">
                    <AiFillClockCircle />
                    <h3 className="font-inter font-bold">6h</h3>
                </div>
            </div>
        </div>
    )
}

export default FavoriteCard
