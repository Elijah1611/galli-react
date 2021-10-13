import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import abbreviate from 'number-abbreviate'
import { Link } from 'react-router-dom'

const Post = ({ id, image, profileImage, username, numberOfLikes, numberOfComments }) => {

    return (
        <div className="p-2 mb-10">
            <div className=" shadow-xl rounded-3xl">
                <Link to={`/post/${id}`}>
                    <img className="rounded-3xl max-h-full w-full" src={image} alt={username} />
                </Link>

                <Link to={`/profile/${username}`}>
                    <div className="relative w-32 mx-auto">
                        <div className="absolute bottom-[-3rem] ml-auto mr-auto left-0 right-0 text-center">
                            <img className="rounded-full ml-auto mr-auto left-0 right-0 w-14 m-1" src={profileImage} alt={username} />
                            <h2 className="font-inter font-bold text-sm">{username}</h2>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex items-center justify-between">
                <div className="mt-1 flex items-center" onClick={() => console.log('You Liked this post!')}>
                    <AiOutlineHeart size="2.2rem" className="text-red-600 ml-1" />
                    <h2 className="text-red-600 font-bold font-inter" >{abbreviate(numberOfLikes)}</h2>
                </div>

                <Link to={`/post/${id}`}>
                    <div className="mt-1 flex items-center">
                        <h2 className="mr-1" >{abbreviate(numberOfComments)}</h2>
                        <BiCommentDetail size="1.8rem" className="mr-1" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Post
