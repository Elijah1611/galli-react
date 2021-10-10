import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data)

    const homeImage = "https://images.unsplash.com/photo-1596430222039-4a2d7b4cd767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"

    return (
        <div>
            <div className="shadow-xl">
                <img src={homeImage} alt="Galli Hompage Image" />
            </div>

            <div className="pt-8">
                <h1 className="font-inria font-bold text-center text-6xl">Sign In</h1>
            </div>

            <form
                className="grid grid-cols-1 p-5"
                onSubmit={handleSubmit(onSubmit)}
            >
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

                <Link to="/register" className="text-center">
                    <button className="font-inter font-bold font-thin">Don't Have An Account?</button>
                </Link>

                <input className="font-inter font-bold shadow-xl px-12 py-4 rounded-2xl mb-8 mt-8 bg-green-500 text-white" type="submit" value="Create" />
            </form>
        </div>
    )
}

export default Login
