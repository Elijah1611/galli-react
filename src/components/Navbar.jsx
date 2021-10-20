import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { IoGridSharp } from 'react-icons/io5'
import { AiFillHeart } from 'react-icons/ai'
import NavMenu from './NavMenu'
import Profile from '../pages/Profile'

const Navbar = () => {
    const username = localStorage.getItem('galli_username')
    const token = localStorage.getItem('galli_token')

    const renderHomeButton = () => {
        if (!token) return (
            <Link to="/" className="col-span-3 flex justify-start items-center gap-1" >
                <IoGridSharp size="1.5rem" />
                <h1 className="font-inria text-3xl">Galli</h1>
            </Link>
        )

        return (
            <Link to='/discover' className="col-span-3 flex justify-start items-center gap-1" >
                <IoGridSharp size="1.5rem" />
                <h1 className="font-inria text-3xl">Galli</h1>
            </Link>
        )
    }

    // const userQuery = useQuery('user', async () => await axios.get(`http://localhost:7000/api/users/username/${username}`))
    // const user = userQuery.data?.data

    // const renderProfileBubble = () => {
    //     return (user && <Link to={`/profile/${username}`} className="col-span-4 flex flex-col justify-around items-center mt-1">
    //         <div>
    //             <img className="rounded-full w-10" src={user.avatar_url} alt={user.username} />
    //         </div>

    //         <div className="text-red-500 flex justify-center items-center">
    //             <AiFillHeart size="1rem" className="drop-shadow-xl" />
    //             <h4 className="font-inter font-bold text-sm">{user.total_hearts}</h4>
    //         </div>
    //     </Link>)
    // }

    return (
        <div className="grid grid-cols-4 shadow-md w-full h-16 px-5 fixed top-0 z-50 bg-white">
            {renderHomeButton()}

            {/* {renderProfileBubble()} */}

            {token && <NavMenu username={username} />}
        </div>
    )

}

export default Navbar
