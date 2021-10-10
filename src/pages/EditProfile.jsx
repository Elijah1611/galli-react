import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { useForm } from "react-hook-form"
import { AiFillHeart } from 'react-icons/ai'

const EditProfile = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)
    const params = useParams()

    return (
        <div>
            <div className="flex justify-around items-center">
                <div className="flex flex-col justify-center items-center mt-10 mb-5">
                    <img className="rounded-full w-32 shadow-xl" src="https://i.pravatar.cc/300?img=36" alt={params.user_id} />
                </div>

                <div className="flex flex-col justify-center items-start">
                    <h2 className="font-inter font-bold text-3xl">{params.user_id}</h2>

                    <div className="flex justify-center items-center">
                        <AiFillHeart size="2.5rem" className="text-red-500 drop-shadow-xl" />
                        <h2 className="font-inter font-bold text-lg text-red-500">52,345</h2>
                    </div>
                </div>
            </div>

            <div className="mb-5">
                <h3 className="font-inter font-bold ml-5 mb-1">Jessica Sky</h3>
                <p className="font-inter font-thin px-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus sed soluta at dolores maxime asperiores porro numquam delectus obcaecati.
                </p>
            </div>

            <div className="mb-5">
                <h3 className="font-inter font-bold text-center">Joined: July 2020</h3>
            </div>

            <form
                className="grid grid-cols-1 p-5 pt-0"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className="font-inter font-bold mb-3" htmlFor="email">Email</label>
                <input
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold mb-6"
                    {...register('email', { maxLength: 60 })}
                    type="email"
                    maxLength="60"
                    value="JessicaSky@gmail.com"
                    required
                />

                <label className="font-inter font-bold mb-3" htmlFor="email">First Name</label>
                <input
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold mb-6"
                    {...register('first_name', { minLength: 6, maxLength: 50 })}
                    type="text"
                    maxLength="50"
                    value="Jessica"
                    required
                />

                <label className="font-inter font-bold mb-3" htmlFor="email">Last Name</label>
                <input
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold mb-6"
                    {...register('last_name', { minLength: 6, maxLength: 50 })}
                    type="text"
                    maxLength="50"
                    value="Sky"
                    required
                />

                <label className="font-inter font-bold mb-3" htmlFor="email">Bio</label>
                <textarea
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold mb-2"
                    {...register('bio', { minLength: 6, maxLength: 160 })}
                    rows="5"
                    maxLength="160"
                    placeholder="Tell us about yourself..."
                    required
                />
                <p className="font-inter font-thin text-sm text-right">{watch('bio')?.length || 0}/160</p>

                <input className="font-inter font-bold shadow-xl px-12 py-4 rounded-2xl mb-8 mt-8 bg-green-500 text-white" type="submit" value="Update" />
            </form>

            <div className="mb-10">
                <Link to={`/profile/${params.user_id}/remove`}>
                    <h3 className="font-inter font-bold text-center text-red-500">Remove Profile</h3>
                </Link>
            </div>

        </div>
    )
}

export default EditProfile
