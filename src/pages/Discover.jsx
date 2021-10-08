import React from 'react'
import Post from '../components/Post'
import Heading from '../components/Heading'

const Discover = () => {
    const posts = [
        {
            image: 'https://images.unsplash.com/photo-1633511090164-910b108d3442?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80',
            profileImage: 'https://i.pravatar.cc/300?img=36',
            username: 'JessicaSky',
            likes: '2k',
            comments: 3
        },
        {
            image: 'https://images.unsplash.com/photo-1633525057676-8185c059e1ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80',
            profileImage: 'https://i.pravatar.cc/300?img=33',
            username: 'HiLee',
            likes: '4k',
            comments: 49
        }
    ]

    const renderAllPosts = posts.map(post => {
        return (<Post
            key={post.username}
            image={post.image}
            profileImage={post.profileImage}
            username={post.username}
            numberOfLikes={post.likes}
            numberOfComments={post.comments}
        />
        )
    })

    return (
        <div>
            <Heading title="Discover" />
            {renderAllPosts}
        </div>
    )
}

export default Discover
