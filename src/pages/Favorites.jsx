import React, { Fragment } from 'react'
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
        return (user && user.favorites.length > 0) ? user.favorites
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map(f => (
                <Fragment key={f.id}>
                    <FavoriteCard
                        id={f.id}
                        post_id={f.post.id}
                        image={f.post.image_url}
                        title={f.post.title}
                        avatar={f.post.user.avatar_url}
                        username={f.post.user.username}
                        hearts={f.post.user.total_hearts}
                        favDate={f.created_at}
                    />
                </Fragment>
            )) : <h2 className="flex justify-center items-center mt-10 text-2xl">No Favorites Yet..</h2>
    }

    return (
        <div>
            <Heading title="Favorites" />

            {renderFavorites()}
        </div>
    )
}

export default Favorites
