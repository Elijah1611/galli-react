import React from 'react'
import Post from '../components/Post'
import Heading from '../components/Heading'
import { useQuery } from 'react-query'
import axios from 'axios'
import Loader from '../components/Loader'

const Discover = () => {
    const postsQuery = useQuery('posts', async () => await axios.get(`${process.env.REACT_APP_API_URL}/posts/all`))
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
        </div>
    ) : <Loader />
}

export default Discover
