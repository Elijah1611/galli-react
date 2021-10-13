import React, { useState } from 'react'
import Post from '../components/Post'
import Heading from '../components/Heading'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ImSpinner9 } from 'react-icons/im'

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
            />
        )
    }) : null

    const loader = () => {
        return
    }

    return !postsQuery.isLoading ? (
        <div>
            <Heading title="Discover" />

            {renderAllPosts}

            {console.log(postsQuery)}
            {console.log(posts)}
        </div>
    ) : (
        <div className="flex justify-center items-center">
            <ImSpinner9 className="animate-spin text-7xl m-10" />
        </div>
    )
}

export default Discover
