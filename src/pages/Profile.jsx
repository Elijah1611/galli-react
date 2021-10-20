import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { AiFillHeart } from 'react-icons/ai'
import ProfilePost from '../components/ProfilePost'
import { ImSpinner9 } from 'react-icons/im'
import NumberFormat from 'react-number-format';

const Profile = () => {
    const [profileUser, setProfileUser] = useState()
    const { username } = useParams()

    useEffect(async () => {
        const result = await axios.get(`http://localhost:7000/api/users/username/${username}`)

        setProfileUser(result.data);
        console.log(result.data)
    }, [username]);

    const renderUserPosts = () => {
        return profileUser.posts.length > 0 ? profileUser.posts
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map(p => (
                <Link key={p.id} to={`/post/${p.id}`}>
                    <ProfilePost
                        image={p.image_url}
                        numOfLikes={p.favorites.length}
                        numOfComments={p.comments.length}
                    />
                </Link>
            )) : <p className="font-bold text-center">No Posts Yet</p>
    }

    return profileUser ? (
        <div>
            <div className="flex flex-col justify-center items-center gap-4 mt-10 mb-5">
                <img className="rounded-full w-48 shadow-xl" src={profileUser.avatar_url} alt={username} />
                <h2 className="font-inter font-bold text-3xl">{username}</h2>
            </div>
            {console.log(profileUser.total_hearts)}
            <div className="flex justify-center items-center gap-2 mb-10">
                <AiFillHeart size="2.5rem" className="text-red-500 drop-shadow-xl" />
                <h2 className="font-inter font-bold text-lg text-red-500">
                    <NumberFormat value={profileUser.total_hearts} displayType={'text'} thousandSeparator={true} />
                </h2>
            </div>

            <div className="mb-10">
                <h3 className="font-inter font-bold ml-5 mb-1">{profileUser.first_name} {profileUser.last_name}</h3>
                <p className="font-inter font-thin px-5">
                    {profileUser.bio ? profileUser.bio : '...'}
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 px-5 pb-10">
                {renderUserPosts()}
            </div>
        </div>
    ) : (
        <div className="flex justify-center items-center">
            <ImSpinner9 className="animate-spin text-7xl m-10" />
        </div>
    )
}

export default Profile