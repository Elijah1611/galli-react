import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { IoGridSharp } from 'react-icons/io5'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const ProfileNavbar = () => {
    return (
        <div className="grid grid-cols-6 shadow-md h-16 px-5">
            <div className="col-span-1 flex justify-center items-center">
                <IoGridSharp size="1.5rem" />
                <h1 className="font-inria text-3xl">G</h1>
            </div>

            <div className="col-span-4 flex flex-col justify-center items-center mt-1">
                <div>
                    <img className="rounded-full w-10" src="https://i.pravatar.cc/300?img=31" alt="ChiChi" />
                </div>

                <div className="text-red-500 flex justify-center items-center">
                    <AiFillHeart size="1rem" className="drop-shadow-xl" />
                    <h4 className="font-inter font-bold text-sm">34k</h4>
                </div>
            </div>

            <div className="col-span-1 flex justify-end items-center">
                <HiOutlineMenuAlt3 size="2rem" />
            </div>
        </div>
    )
}

export default ProfileNavbar
