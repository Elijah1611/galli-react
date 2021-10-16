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
    const user = userQuery.data?.data


    const renderFavorites = () => {
        return user ? user.favorites
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map(f => (
                <FavoriteCard
                    key={f.id}
                    image={f.post.image_url}
                    title={f.post.title}
                    avatar={f.post.user.avatar_url}
                    username={f.post.user.username}
                    hearts={f.post.user.total_hearts}
                    postDate={f.post.created_at}
                />
            )) : <h2>No Favorites Yet</h2>
    }

    return (
        <div>
            <Heading title="Favorites" />

            {renderFavorites()}
        </div>
    )
}

export default Favorites
