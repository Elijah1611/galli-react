import React from 'react'
import { IoGridSharp } from 'react-icons/io5'
import { HiMap } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

const Navbar = () => {
    const location = useLocation()

    // Hide Nav if not logged in
    const isHome = location.pathname == '/'

    console.log(location.pathname)

    const renderMapButton = () => {
        return isHome ? null : (
            <Link to="/map" className="col-span-1 flex justify-end items-center">
                <HiMap size="1.5rem" />
            </Link>
        )
    }

    return (
        <div className="grid grid-cols-6 shadow-md h-16 px-5">
            <Link to="/" className="col-span-5 flex justify-start items-center gap-1" >
                <IoGridSharp size="1.5rem" />
                <h1 className="font-inria text-3xl">Galli</h1>
            </Link>

            {renderMapButton()}
        </div>
    )
}

export default Navbar
