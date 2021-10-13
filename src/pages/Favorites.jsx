import React from 'react'
import Heading from '../components/Heading'
import FavoriteCard from '../components/FavoriteCard'
import { ImSpinner9 } from 'react-icons/im'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Favorites = () => {
    const { username } = useParams()
    const userQuery = useQuery('user', async () => await axios.get(`http://localhost:7000/api/users/username/${username}`))
    const favoritesQuery = useQuery('favorites', async () => await axios.get(`http://localhost:7000/api/favorites/username/${username}`))
    const user = userQuery.data?.data
    const favorites = favoritesQuery.data?.data

    const renderFavorites = () => {
        // return users.favorites.map(f => (
        //     <FavoriteCard image={f.image} />
        // ))
        console.log(favorites)
    }

    return (
        <div>
            <Heading title="Favorites" />

            {renderFavorites()}
        </div>
    )
}

export default Favorites
