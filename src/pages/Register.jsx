import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useMutation } from 'react-query';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Register = () => {
    const image = "https://images.unsplash.com/photo-1627932123142-52c16a530ce9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2728&q=80"

    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [is401Error, set401Error] = useState(false)
    const [duplicateError, setDuplicateError] = useState(false)

    const mutation = useMutation(data => {
        return axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, data)
    },
        {
            onSuccess: (result) => {
                console.log('setting localstorage data', result.data)
                localStorage.setItem('galli_token', result.data.access_token)

                window.location.href = '/discover'
            },
            onError: (error) => {
                console.log(error.message)
                if (error.message.includes('401')) {
                    set401Error(true)
                }
                if (error.message.includes('400')) {
                    setDuplicateError(true)
                }
            }
        })

    useEffect(() => {
        set401Error(false)
    }, [])

    const onSubmit = async loginData => {
        console.log(loginData)
        mutation.mutate(loginData)
    }

    const checkServerErrors = () => {
        if (mutation.error) {
            if (is401Error) return `Invalid Username and Password`

            if (duplicateError) return 'User Already Exist or Invalid Info'

            return 'Something Went Wrong'
        }

        return null
    }


    return (
        <div>
            <div className="shadow-xl md:w-4/6 mx-auto md:mt-10">
                <img src={image} alt="Galli Register Image" className="shadow-xl md:rounded-xl" data-testid="banner" />
            </div>

            <div className="pt-8">
                <h1 className="font-inria font-bold text-center text-6xl" data-testid="title">Sign Up</h1>
            </div>

            <form
                className="grid grid-cols-1 p-5 md:w-2/3 lg:w-2/4 xl:w-1/3 md:mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className="font-inter font-bold mb-3" htmlFor="email">First Name</label>
                <input
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold mb-6"
                    {...register('first_name', { minLength: 1, maxLength: 50 })}
                    type="text"
                    required
                    data-testid="firstNameField"
                />

                <label className="font-inter font-bold mb-3" htmlFor="email">Last Name</label>
                <input
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold mb-6"
                    {...register('last_name', { minLength: 1, maxLength: 50 })}
                    type="text"
                    required
                />

                <label className="font-inter font-bold mb-3" htmlFor="email">Username</label>
                <input
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold mb-6"
                    {...register('username', { minLength: 1, maxLength: 12 })}
                    type="text"
                    required
                />

                <label className="font-inter font-bold mb-3" htmlFor="email">Email</label>
                <input
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold mb-6"
                    {...register('email', { maxLength: 60 })}
                    type="email"
                    required
                />

                <label className="font-inter font-bold mb-3" htmlFor="email">Password</label>
                <input
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold"
                    {...register('password', { minLength: 6, maxLength: 128 })}
                    type="password"
                    required
                />
                <p className="font-inter font-thin text-yellow-500 text-center text-sm mt-2 mb-8">
                    {errors.password && "Password must be between 6 to 128 characters."}
                </p>

                <label className="font-inter font-bold mb-3" htmlFor="email">Confirm Password</label>
                <input
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold"
                    {...register('confirmPassword', { minLength: 6, maxLength: 128, validate: (value) => value === watch('password') })}
                    type="password"
                    required
                />
                <p className="font-inter font-thin text-yellow-500 text-center text-sm mt-2 mb-2">
                    {errors.confirmPassword && "Passwords must match."}
                </p>
                <p className="font-inter font-thin text-yellow-500 text-center text-sm mb-8">
                    <span className="text-red-500">{checkServerErrors()}</span>
                </p>

                <button
                    className="font-inter font-bold shadow-xl px-12 py-4 rounded-2xl mb-8 bg-green-500 text-white cursor-pointer"
                    type="submit"
                    data-testid="createBtn"
                >
                    Create
                </button>

                <Link to="/login" className="text-center mt-8 mb-8">
                    <button className="font-inter font-bold font-thin">Have An Account?</button>
                </Link>
            </form>


        </div>
    )
}

export default Register
