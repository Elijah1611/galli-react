import React, { useEffect } from 'react'
import Post from '../components/Post'
import Heading from '../components/Heading'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ImSpinner9 } from 'react-icons/im'
import Loader from '../components/Loader'

const Discover = () => {
    const username = localStorage.getItem('galli_username')
    const user_id = localStorage.getItem('galli_user_id')
    console.log(username, user_id)
    const userQuery = useQuery('user', async () => await axios.get(`http://localhost:7000/api/users/username/${username}`), {
        onSuccess: (result) => {
            localStorage.setItem('galli_user_id', result.data.id)
        }
    })
    const user = userQuery.data?.data

    const postsQuery = useQuery('posts', async () => await axios.get('http://localhost:7000/api/posts/all'))
    const posts = postsQuery.data?.data

    // useEffect(() => {
    //     if (!user_id || user_id === 'undefined') {
    //         userQuery.refetch()
    //     }
    // }, [])

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
            <Heading title="Discover" />

            {renderAllPosts}

            {console.log(postsQuery)}
            {console.log(posts)}
        </div>
    ) : <Loader />
}

export default Discover
