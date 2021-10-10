import React from 'react'
import Heading from '../components/Heading'
import { AiFillHeart } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import ProfileBubble from '../components/ProfileBubble'

const PostDetails = () => {
    return (
        <div>
            <div className="flex items-center pt-5 pb-2 pl-2 gap-2">
                <img className="rounded-full w-14" src="https://i.pravatar.cc/300?img=31" alt="ChiChi" />
                <h2 className="font-intar font-bold">ChiChi</h2>
            </div>
            <div>
                <img className="shadow-xl" src="https://images.unsplash.com/photo-1633326260376-4958df25f0e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1760&q=80" alt="Post" />
            </div>

            <div className="text-red-500 gap-1 flex justify-center items-center mt-5">
                <AiFillHeart size="2rem" className="drop-shadow-xl" />
                <h4 className="font-inter font-bold text-xl">534,043</h4>
            </div>

            <div className="flex justify-center text-blue-500 mt-10 mb-2 items-center font-inter font-bold text-md">
                <BiCommentDetail size="1.2rem" className="mr-1 " />
                <h2 className="mr-1">14</h2>
                <h3>Comments</h3>
            </div>

            <hr className="bg-blue-200 opacity-75 h-0.5 rounded-full w-75 mx-10 mb-10" />

            <div className="flex px-5 mb-10">
                <div className="flex flex-col justify-center">
                    <h3 className="font-inter font-bold">Loann</h3>

                    <img className="rounded-full w-12" src="https://i.pravatar.cc/300?img=30" alt="ChiChi" />

                    <div className="text-red-500 flex items-center mt-1">
                        <AiFillHeart size="1rem" className="drop-shadow-xl" />
                        <h4 className="font-inter font-bold">534k</h4>
                    </div>
                </div>

                <p className="flex-grow flex justify-center items-center text-sm font-inter font-bold p-5 ml-5 rounded-lg shadow-lg">Amazing! Great Post!</p>
            </div>


            <div className="flex px-5 mb-10">
                <div className="flex flex-col justify-center">
                    <h3 className="font-inter font-bold">Daisy</h3>

                    <img className="rounded-full w-12" src="https://i.pravatar.cc/300?img=32" alt="ChiChi" />

                    <div className="text-red-500 flex items-center mt-1">
                        <AiFillHeart size="1rem" className="drop-shadow-xl" />
                        <h4 className="font-inter font-bold">34k</h4>
                    </div>
                </div>

                <p className="flex-grow flex justify-center items-center text-sm font-inter font-bold p-5 ml-5 rounded-lg shadow-lg">Awesome! Great Post and color!</p>
            </div>
        </div>
    )
}

export default PostDetails
