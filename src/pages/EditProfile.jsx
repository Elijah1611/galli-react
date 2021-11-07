import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { AiFillHeart } from 'react-icons/ai'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { useQuery, useMutation } from 'react-query'
import Loader from '../components/Loader'
import Moment from 'react-moment'

const EditProfile = () => {
    const history = useHistory()
    const [user, setUser] = useState()
    const { register, handleSubmit, watch, setValue } = useForm({ mode: 'onBlur' })

    const token = localStorage.getItem('galli_token')
    const { id: user_id, username } = jwtDecode(token);

    useQuery('user', async () => await axios.get(`${process.env.REACT_APP_API_URL}/users/username/${username}`), {
        onSuccess: (res) => setUser(res.data)
    })

    const updateProfile = useMutation((data) => {
        return axios.patch(`${process.env.REACT_APP_API_URL}/users/${user_id}`, data)
    },
        {
            onSuccess: () => {
                history.push(`/profile/${username}`)
            },
            onError: (error) => {
                console.log(error)
            }
        }
    )

    const onSubmit = data => updateProfile.mutate(data)


    useEffect(() => {
        if (user) {
            setValue('email', user.email)
            setValue('first_name', user.first_name)
            setValue('last_name', user.last_name)
            setValue('bio', user.bio)
            setValue('avatar_url', user.avatar_url)
        }
    }, [user, setValue]);

    return user ? (
        <div>
            <div className="flex flex-col mb-10 justify-around items-center">
                <div className="flex flex-col justify-center items-center mt-10 mb-5">
                    <img className="rounded-full w-32 shadow-md" src={user.avatar_url} alt={user.username} />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h2 className="font-inter font-bold text-3xl" data-testid="username">{user.username}</h2>

                    <div className="flex justify-center items-center">
                        <AiFillHeart size="2rem" className="text-red-500 drop-shadow-xl" />
                        <h2 className="font-inter font-bold text-lg text-red-500">{user.likes}</h2>
                    </div>
                </div>
            </div>

            <div className="mb-5">
                <h3 className="font-inter font-bold text-center">Joined: <Moment fromNow>{user.created_at}</Moment></h3>
                <h3 className="font-inter font-light opacity-25 text-center"><Moment format="MMM DD, YYYY">{user.created_at}</Moment></h3>
            </div>

            <form
                className="grid grid-cols-1 md:w-2/3 lg:w-2/4 xl:w-1/3 mx-auto p-5 pt-0"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className="font-inter font-bold mb-3" htmlFor="email">Email</label>
                <input
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold mb-6"
                    {...register('email', { maxLength: 60 })}
                    type="email"
                    maxLength="60"
                    required
                    id="email"
                    data-testid="emailField"
                />

                <label className="font-inter font-bold mb-3" htmlFor="firstName">First Name</label>
                <input
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold mb-6"
                    {...register('first_name', { maxLength: 50 })}
                    type="text"
                    maxLength="50"
                    required
                    id="firstName"
                />

                <label className="font-inter font-bold mb-3" htmlFor="last_name">Last Name</label>
                <input
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold mb-6"
                    {...register('last_name', { minLength: 1, maxLength: 50 })}
                    type="text"
                    maxLength="50"
                    id="last_name"
                    required
                />

                <label className="font-inter font-bold mb-3" htmlFor="bio">Bio</label>
                <textarea
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold mb-2"
                    {...register('bio', { minLength: 1, maxLength: 160 })}
                    rows="5"
                    maxLength="160"
                    placeholder="Tell us about yourself..."
                    id="bio"
                />
                <p className="font-inter font-thin text-sm text-right">{watch('bio')?.length || 0}/160</p>

                <label className="font-inter font-bold mb-3" htmlFor="avatarUrl">Avatar URL</label>
                <input
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold mb-6"
                    {...register('avatar_url', { minLength: 1 })}
                    type="text"
                    id="avatarUrl"
                    required
                />

                <button className="font-inter font-bold shadow-xl px-12 py-4 rounded-2xl mb-8 mt-8 bg-green-500 text-white cursor-pointer" type="submit" data-testid="updateBtn">
                    Update
                </button>
            </form>

            <div className="mb-10">
                <Link to={`/profile/${user.username}/remove`}>
                    <h3 className="font-inter font-bold text-center text-red-500">Remove Profile</h3>
                </Link>
            </div>

        </div>
    ) : <Loader />
}

export default EditProfile
