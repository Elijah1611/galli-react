import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoLogOutOutline } from 'react-icons/io5'
import { GiWorld } from 'react-icons/gi'
import { BiCamera, BiHeart } from 'react-icons/bi'
import { FaRegUserCircle } from 'react-icons/fa'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'

const NavMenu = ({ username }) => {
    const [isOpen, setIsOpen] = useState(false)

    const location = useLocation()
    const isHome = location.pathname === '/'
    console.log(location.pathname)

    const renderMenuButton = () => {
        if (isHome) return null

        if (!isOpen) return (
            <div className="col-span-1 flex justify-end items-center" onClick={() => setIsOpen(true)}>
                <HiOutlineMenuAlt3 size="1.5rem" />
            </div>
        )

        return (
            <div className="col-span-1 flex justify-end items-center" onClick={() => setIsOpen(false)}>
                <IoCloseOutline size="2rem" />
            </div>
        )
    }

    const handleLogout = () => {
        setIsOpen(false)
        localStorage.removeItem('galli_token')
    }

    return (
        <React.Fragment>
            {renderMenuButton()}

            {
                isOpen ? (
                    <div className="absolute top-[4rem] right-0 z-50 font-bold font-inter capitalize text-center border border-gray-900 bg-white w-1/2 shadow-xl">
                        <Link to="/discover" onClick={() => setIsOpen(false)}>
                            <button className="w-full flex items-center gap-2 p-2 border-b-2 hover:font-bold active:bg-blue-500 active:text-white">
                                <GiWorld className="text-xl" />
                                <h2>Discover</h2>
                            </button>
                        </Link>

                        <Link to={`/profile/${username}`} onClick={() => setIsOpen(false)}>
                            <button className="w-full flex items-center gap-2 p-2 border-b-2 hover:font-bold active:bg-blue-500 active:text-white">
                                <FaRegUserCircle className="text-xl" />
                                <h2>Profile</h2>
                            </button>
                        </Link>

                        <Link to={`/favorites/${username}`} onClick={() => setIsOpen(false)}>
                            <button className="w-full flex items-center gap-2 p-2 border-b-2 hover:font-bold active:bg-blue-500 active:text-white">
                                <BiHeart className="text-xl" />
                                <h2>Favorites</h2>
                            </button>
                        </Link>

                        <Link to={`/upload`} onClick={() => setIsOpen(false)}>
                            <button className="w-full flex items-center gap-2 p-2 border-b-2 hover:font-bold active:bg-blue-500 active:text-white">
                                <BiCamera className="text-xl" />
                                <h2>Upload</h2>
                            </button>
                        </Link>

                        <Link to={`/`} onClick={handleLogout}>
                            <button className="w-full flex items-center gap-2 p-2 border-b-2 hover:font-bold active:bg-blue-500 active:text-white">
                                <IoLogOutOutline className="text-xl" />
                                <h2>Logout</h2>
                            </button>
                        </Link>
                    </div>
                ) : null
            }
        </React.Fragment>
    )
}

export default NavMenu
