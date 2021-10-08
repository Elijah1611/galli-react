import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'

const Post = ({ image, profileImage, username, numberOfLikes, numberOfComments }) => {

    return (
        <div className="p-2 mb-10">
            <div className="relative shadow-xl rounded-3xl">
                <img className="rounded-3xl max-h-full w-full" src={image} alt={username} />

                <div className="absolute bottom-[-3rem] ml-auto mr-auto left-0 right-0 text-center">
                    <img className="rounded-full ml-auto mr-auto left-0 right-0 w-14 m-1" src={profileImage} alt={username} />
                    <h2 className="font-inter font-bold text-sm">{username}</h2>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="mt-1 flex items-center">
                    <AiOutlineHeart size="2.2rem" className="text-red-600 ml-1" />
                    <h2 className="text-red-600 font-bold font-inter" >{numberOfLikes}</h2>
                </div>

                <div className="mt-1 flex items-center">
                    <h2 className="mr-1" >{numberOfComments}</h2>
                    <BiCommentDetail size="1.8rem" className="mr-1" />
                </div>
            </div>
        </div>
    )
}

export default Post
