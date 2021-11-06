import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min'

const Home = () => {
    const homeImage = "https://images.unsplash.com/photo-1468877294001-94aef5ebfa1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80"

    const isLoggedIn = window.localStorage.getItem('galli_token')

    return (
        <div className="mb-20">
            <div className="shadow-xl md:w-4/6 mx-auto md:mt-10">
                <img src={homeImage} alt="Galli Hompage Image" className="shadow-xl md:rounded-xl" data-testid="home-image" />
            </div>

            <div className="p-8 text-center">
                <h1 className="font-inria font-bold text-8xl" data-testid="home-title">Galli</h1>
                <h2 className="font-inter font-thin text-2xl">View. Life. Gallery</h2>
            </div>

            <div className="flex justify-center flex-col sm:flex-row gap-10 md:gap-20 items-center mt-16 px-5">
                {
                    !isLoggedIn
                        ? (
                            <Fragment>
                                <Link to="/login" data-testid="loginBtn">
                                    <Button text="Log In" />
                                </Link>

                                <Link to="/register" data-testid="registerBtn">
                                    <Button text="Register" />
                                </Link>
                            </Fragment>
                        )
                        : (
                            <Link to="/discover" data-testid="discoverBtn">
                                <Button text="Discover" />
                            </Link>
                        )
                }
            </div>
        </div>
    )
}

export default Home
