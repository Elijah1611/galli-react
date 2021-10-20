import React, { useState } from 'react'
import Post from '../components/Post'
import Heading from '../components/Heading'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ImSpinner9 } from 'react-icons/im'
import Loader from '../components/Loader'

const Discover = () => {
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
