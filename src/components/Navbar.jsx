import React from 'react'
import { IoGridSharp } from 'react-icons/io5'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {
    return (
        <div className="grid grid-cols-6 shadow-md h-16 px-5">
            <div className="col-span-5 flex justify-start items-center gap-1">
                <IoGridSharp size="1.5rem" />
                <h1 className="font-inria text-3xl">Galli</h1>
            </div>

            <div className="col-span-1 flex justify-end items-center">
                <HiOutlineMenuAlt3 size="2rem" />
            </div>
        </div>
    )
}

export default Navbar
