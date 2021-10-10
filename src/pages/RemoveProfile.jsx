import React from 'react'
import { useParams } from 'react-router'
import { AiFillHeart } from 'react-icons/ai'

const RemoveProfile = () => {
    const params = useParams()

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-4 mt-10 mb-5">
                <img className="rounded-full w-48 shadow-xl" src="https://i.pravatar.cc/300?img=36" alt={params.user_id} />
                <h2 className="font-inter font-bold text-3xl">{params.user_id}</h2>
            </div>

            <div className="flex justify-center items-center gap-2 mb-5">
                <AiFillHeart size="2.5rem" className="text-red-500 drop-shadow-xl" />
                <h2 className="font-inter font-bold text-lg text-red-500">52,345</h2>
            </div>

            <div className="mb-10">
                <h3 className="font-inter font-bold text-center">Joined: July 2020</h3>
            </div>

            <div className="mb-10 mx-2">
                <h3 className="font-inter font-bold text-center">Are you sure you want to delete your profile?</h3>
                <h4 className="font-inter font-bold text-red-500 text-center uppercase">This is permanent.</h4>
            </div>

            <div className="flex justify-center items-center">
                <button className="font-inter font-bold text-white shadow-xl px-12 py-4 rounded-2xl bg-red-500">
                    Yes, Remove My Account
                </button>
            </div>

        </div>
    )
}

export default RemoveProfile
