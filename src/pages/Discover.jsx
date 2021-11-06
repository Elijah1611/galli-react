import React, { useEffect } from 'react'
import Post from '../components/Post'
import Heading from '../components/Heading'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ImSpinner9 } from 'react-icons/im'
import Loader from '../components/Loader'
import jwtDecode from 'jwt-decode'

const Discover = () => {
    const token = localStorage.getItem('galli_token')
    const { id: user_id, username } = jwtDecode(token);

    console.log(username, user_id)

    const userQuery = useQuery('user', async () => await axios.get(`http://localhost:7000/api/users/username/${username}`))
    const user = userQuery.data?.data

    const postsQuery = useQuery('posts', async () => await axios.get('http://localhost:7000/api/posts/all'))
    const posts = postsQuery.data?.data

    const renderAllPosts = posts ? posts.map(post => {
        return (
            <Post
                key={post.id}
                id={post.id}
                image={post.image_url}
                profileImage={post.user.avatar_url}
                username={post.user.username}
                numberOfLikes={post.favorites.length}
                numberOfComments={post.comments.length}
                favorites={post.favorites}
                createdAt={post.created_at}
                refetch={postsQuery.refetch}
            />
        )
    }) : null

    return !postsQuery.isLoading ? (
        <div>
            <Heading title="Discover" data-testid="title" />

            {renderAllPosts}

            {console.log(postsQuery)}
            {console.log(posts)}
        </div>
    ) : <Loader />
}

export default Discover
