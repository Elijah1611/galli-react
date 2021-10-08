import React from 'react'
import Button from '../components/Button'

const Home = () => {
    const homeImage = "https://images.unsplash.com/photo-1468877294001-94aef5ebfa1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80"
    return (
        <div>
            <div className="shadow-xl">
                <img src={homeImage} alt="Galli Hompage Image" />
            </div>

            <div className="p-8">
                <h1 className="font-inria font-bold text-8xl">Galli</h1>
                <h2 className="font-inter font-thin text-2xl">View. Life. Gallery</h2>
            </div>

            <div className="flex justify-around items-center mt-16 px-5">
                <Button text="Log In" />
                <Button text="Register" />
            </div>
        </div>
    )
}

export default Home
