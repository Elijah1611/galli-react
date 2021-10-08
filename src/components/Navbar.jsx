import React from 'react'
import { HiOutlineViewGrid } from 'react-icons/hi'

const Navbar = () => {
    return (
        <div className="shadow-xl h-16 flex justify-center items-center gap-1">
            <HiOutlineViewGrid size="2rem" />
            <h1 className="font-inria text-3xl">Galli</h1>
        </div>
    )
}

export default Navbar
