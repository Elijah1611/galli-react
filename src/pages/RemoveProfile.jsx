import React from 'react'
import { useParams } from 'react-router'
import { AiFillHeart } from 'react-icons/ai'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { useQuery } from 'react-query'
import Loader from '../components/Loader'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

const RemoveProfile = () => {
    const token = localStorage.getItem('galli_token')
    const { id: user_id, username } = jwtDecode(token);

    const userQuery = useQuery('user', async () => await axios.get(`http://localhost:7000/api/users/username/${username}`))
    const user = userQuery.data?.data

    return user ? (
        <div>
            <div className="flex flex-col justify-center items-center gap-4 mt-10 mb-5">
                <img className="rounded-full w-48 shadow-xl" src={user.avatar_url} alt={user.username} />
                <h2 className="font-inter font-bold text-3xl" data-testid="username">{user.username}</h2>
            </div>

            <div className="flex justify-center items-center gap-2 mb-5">
                <AiFillHeart size="2.5rem" className="text-red-500 drop-shadow-xl" />
                <h2 className="font-inter font-bold text-lg text-red-500">{user.likes}</h2>
            </div>

            <div className="mb-10">
                <h3 className="font-inter font-bold opacity-25 text-center"><Moment format="MMM DD, YYYY">{user.created_at}</Moment></h3>
            </div>

            <div className="mb-10 mx-2">
                <h3 className="font-inter font-bold text-center">Are you sure you want to delete your profile?</h3>
                <h4 className="font-inter font-bold text-red-500 text-center uppercase">This is permanent.</h4>
            </div>

            <div className="flex justify-center items-center">
                <button className="font-inter font-bold text-white shadow-xl px-12 py-4 rounded-2xl bg-red-500" data-testid="removeBtn">
                    Yes, Remove My Account
                </button>
            </div>

            <Link to={`/profile/${username}/edit`} className="flex justify-center items-center">
                <button className="font-inter font-bold text-white shadow-xl px-12 mt-10 py-4 rounded-2xl bg-blue-500">
                    Cancel
                </button>
            </Link>

        </div>
    ) : <Loader />
}

export default RemoveProfile
