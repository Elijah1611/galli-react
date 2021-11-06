import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useMutation } from 'react-query';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// capture form login
// send form login to backend for JWT token
// get the jwt token and username from backend
// if 401 then show error on login page
// set the jwt token and username in localstorage
// redirect to the discover (protected)
// logout will clear the token from localstorage
// login will prepopulate the form with a username from localstorage if there is one.

const Login = () => {
    const image = "https://images.unsplash.com/photo-1596430222039-4a2d7b4cd767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"

    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [is401Error, set401Error] = useState(false)

    const mutation = useMutation(data => {
        return axios.post('http://localhost:7000/api/auth/login', data)
    },
        {
            onSuccess: (result) => {
                console.log('setting localstorage data', result.data)
                localStorage.setItem('galli_token', result.data.access_token)

                window.location.href = '/discover'
            },
            onError: (error) => {
                if (error.message.includes('401')) {
                    set401Error(true)
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

            return 'Something Went Wrong'
        }

        return null
    }


    return (
        <div>
            <div className="shadow-xl md:w-4/6 mx-auto md:mt-10">
                <img src={image} alt="Galli Login Image" className="shadow-xl md:rounded-xl" data-testid="banner" />
            </div>

            <div className="pt-8">
                <h1 className="font-inria font-bold text-center text-6xl" data-testid="title">Log In</h1>
            </div>

            <form
                className="grid grid-cols-1 p-5 md:w-2/3 lg:w-2/4 xl:w-1/3 md:mx-auto"
                onSubmit={handleSubmit(onSubmit)}
            >
                <label className="font-inter font-bold mb-3" htmlFor="username">Username</label>
                <input
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold mb-6"
                    {...register('username', { maxLength: 60 })}
                    type="text"
                    required
                    data-testid="usernameField"
                />

                <label className="font-inter font-bold mb-3" htmlFor="email">Password</label>
                <input
                    className="rounded-md bg-[#ebebeb] p-3 shadow-md font-inter font-bold"
                    {...register('password', { minLength: 6, maxLength: 128 })}
                    type="password"
                    required
                />
                <p className="font-inter font-thin text-yellow-500 text-center text-sm mt-2">
                    {errors.password && "Password must be between 6 to 128 characters."} <br />
                    <span className="text-red-500">{checkServerErrors()}</span>
                </p>

                <button
                    className="font-inter font-bold shadow-xl px-12 py-4 rounded-2xl mb-8 mt-8 bg-green-500 text-white cursor-pointer"
                    type="submit"
                    data-testid="loginBtn"
                >
                    Log In
                </button>


                <Link to="/register" className="text-center mt-8 mb-8">
                    <button className="font-inter font-bold font-thin">Don't Have An Account?</button>
                </Link>
            </form>
        </div>
    )
}

export default Login
