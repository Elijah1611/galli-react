import React, { } from 'react'
import { Link } from 'react-router-dom'
import { IoGridSharp } from 'react-icons/io5'
import NavMenu from './NavMenu'

const Navbar = () => {
    const token = localStorage.getItem('galli_token')

    const renderHomeButton = () => {
        if (!token) return (
            <Link to="/" className="col-span-3 flex justify-start items-center gap-1 cursor-pointer" >
                <IoGridSharp size="1.5rem" />
                <h1 className="font-inria text-3xl">Galli</h1>
            </Link>
        )

        return (
            <Link to='/discover' className="col-span-3 flex justify-start items-center gap-1 cursor-pointer" >
                <IoGridSharp size="1.5rem" />
                <h1 className="font-inria text-3xl">Galli</h1>
            </Link>
        )
    }

    // const userQuery = useQuery('user', async () => await axios.get(`${process.env.REACT_APP_API_URL}/users/username/${username}`))
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
            {console.log(token)}
            {token ? <NavMenu /> : null}
        </div>
    )

}

export default Navbar
