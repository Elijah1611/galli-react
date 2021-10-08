import React from 'react'
import Heading from '../components/Heading'
import FavoriteCard from '../components/FavoriteCard'

const Favorites = () => {
    return (
        <div>
            <Heading title="Favorites" />

            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
            <FavoriteCard />
        </div>
    )
}

export default Favorites
