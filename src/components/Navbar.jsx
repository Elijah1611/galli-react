import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

import { IoGridSharp, IoLogOutOutline, IoCloseOutline } from 'react-icons/io5'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { GiWorld } from 'react-icons/gi'
import { BiCamera, BiHeart } from 'react-icons/bi'
import { FaRegUserCircle } from 'react-icons/fa'

const Navbar = () => {
    const username = localStorage.getItem('galli_username')
    // const userQuery = useQuery('user', async () => await axios.get(`http://localhost:7000/api/users/username/${username}`))
    // const user = userQuery.data?.data
    // console.log(user)

    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)

    // Hide Nav if not logged in
    const isHome = location.pathname == '/'

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

    const renderHomeButton = () => {
        if (!username) return (
            <Link to="/" className="col-span-5 flex justify-start items-center gap-1" >
                <IoGridSharp size="1.5rem" />
                <h1 className="font-inria text-3xl">Galli</h1>
            </Link>
        )

        return (
            <Link to='/discover' className="col-span-5 flex justify-start items-center gap-1" >
                <IoGridSharp size="1.5rem" />
                <h1 className="font-inria text-3xl">Galli</h1>
            </Link>
        )
    }

    return (
        <div className="grid grid-cols-6 shadow-md w-full h-16 px-5 fixed top-0 z-50 bg-white">
            {renderHomeButton()}

            {renderMenuButton()}

            {
                isOpen ? (
                    <div className="absolute top-[4rem] right-0 z-50 font-bold font-inter capitalize text-center border border-gray-900 bg-white w-1/2 shadow-xl">
                        <Link to="/discover" onClick={() => setIsOpen(false)}>
                            <button className="w-full flex items-center gap-2 p-2 border-b-2 hover:font-bold active:bg-blue-500 active:text-white">
                                <GiWorld className="text-xl" />
                                <h2 className="font-bold">Discover</h2>
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

                        <Link to={`/`} onClick={() => setIsOpen(false)}>
                            <button className="w-full flex items-center gap-2 p-2 border-b-2 hover:font-bold active:bg-blue-500 active:text-white">
                                <IoLogOutOutline className="text-xl" />
                                <h2>Logout</h2>
                            </button>
                        </Link>
                    </div>
                ) : null
            }
        </div>
    )
}

export default Navbar
