import React from 'react'
import Heading from '../components/Heading'
import { AiFillHeart } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import ProfileBubble from '../components/ProfileBubble'
import { useParams } from 'react-router'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import abbreviate from 'number-abbreviate'

const PostDetails = () => {
    const { post_id } = useParams()
    const postQuery = useQuery('post', async () => await axios.get(`http://localhost:7000/api/posts/${post_id}/all`))
    const post = postQuery.data?.data

    const renderComments = () => {
        return post.comments.map(comment => (
            <div key={comment.id} className="flex px-5 mb-5">
                <div className="flex flex-col justify-center items-center" style={{ minWidth: '50px', maxWidth: '50px' }} key={comment.id}>

                    <Link to={`/profile/${comment.user.username}`}>
                        <img className="rounded-full w-28" src={comment.user.avatar_url} alt={comment.user.username} />
                    </Link>

                    <div className="text-red-500 flex items-center justify-center mt-1">
                        <AiFillHeart size="1rem" className="drop-shadow-xl" />
                        <h4 className="font-inter font-bold">{abbreviate(comment.user.total_hearts)}</h4>
                    </div>
                </div>

                <div className="flex-grow flex-col flex justify-center items-center font-inter p-5 ml-5 mt-4 mb-3 rounded-lg shadow-lg">
                    <h3 className="font-bold text-xs self-start mb-1">{comment.user.username}</h3>
                    <p className="text-xs">{comment.content}</p>
                </div>
            </div>
        )
        )
    }

    return (
        postQuery.isLoading ? <p>Loading</p> : <div>
            {console.log(post)}
            <Link to={`/profile/${post.user.username}`}>
                <div className="flex items-center pt-5 pb-2 pl-2 gap-2">
                    <img className="rounded-full w-14" src={post.user.avatar_url} alt={post.user.username} />

                    <div className="flex flex-col">
                        <h2 className="font-intar text-md font-bold">{post.user.username}</h2>

                        <div className="text-red-500 text-xs flex items-center">
                            <AiFillHeart size="1rem" className="drop-shadow-xl" />
                            <h4 className="font-inter font-bold">{abbreviate(post.user.total_hearts)}</h4>
                        </div>
                    </div>
                </div>
            </Link>
            <div>
                <img className="shadow-xl" src={post.image_url} alt={post.title} />
            </div>

            <div className="text-red-500 gap-1 flex justify-center items-center mt-5">
                <AiFillHeart size="2rem" className="drop-shadow-xl" />
                <h4 className="font-inter font-bold text-xl">{post.favorites.length}</h4>
            </div>

            <div className="flex justify-center text-blue-500 mt-10 mb-2 items-center font-inter font-bold text-md">
                <BiCommentDetail size="1.2rem" className="mr-1 " />
                <h2 className="mr-1">{post.comments.length}</h2>
                <h3>Comments</h3>
            </div>

            <hr className="bg-blue-200 opacity-75 h-0.5 rounded-full w-75 mx-10 mb-10" />

            {renderComments()}

        </div>
    )
}

export default PostDetails
