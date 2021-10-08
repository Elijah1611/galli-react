import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'

const ProfilePost = ({ image, numOfLikes, numOfComments }) => {
    return (
        <div>
            <div className="rounded-xl">
                <img src={image} alt="Post" className="rounded-xl" />
            </div>

            <div className="flex justify-between">
                <div className="mt-1 flex items-center">
                    <AiOutlineHeart size="2.2rem" className="text-red-600 ml-1" />
                    <h2 className="text-red-600 font-bold font-inter" >{numOfLikes}</h2>
                </div>

                <div className="mt-1 flex items-center">
                    <h2 className="mr-1" >{numOfComments}</h2>
                    <BiCommentDetail size="1.8rem" className="mr-1" />
                </div>
            </div>
        </div>
    )
}

export default ProfilePost
