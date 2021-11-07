import React, { useState } from 'react'
import Heading from '../components/Heading'
import { AiFillHeart, AiOutlineHeart, AiFillCloseCircle } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import ProfileBubble from '../components/ProfileBubble'
import { useHistory, useParams } from 'react-router'
import { useMutation, useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'
import abbreviate from 'number-abbreviate'
import { useForm } from 'react-hook-form'
import Loader from '../components/Loader'
import Moment from 'react-moment'
import jwtDecode from 'jwt-decode'

const PostDetails = () => {
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const { post_id } = useParams()

    const token = localStorage.getItem('galli_token')
    const { id: user_id, username } = jwtDecode(token);

    const [commentError, setCommentError] = useState(false)

    const postQuery = useQuery('post', async () => await axios.get(`${process.env.REACT_APP_API_URL}/posts/${post_id}/all`))
    const post = postQuery.data?.data

    // Post Mutations
    const removePost = useMutation(() => {
        return axios.delete(`${process.env.REACT_APP_API_URL}/posts/${post_id}/`)
    },
        {
            onSuccess: (result) => {
                history.push('/discover')
            },
            onError: (error) => {
                console.log(error)
            }
        })

    // Favorite Mutations
    const addFavorite = useMutation(() => {
        return axios.post(`${process.env.REACT_APP_API_URL}/posts/addLike`, { post_id, user_id })
    },
        {
            onSuccess: (result) => {
                postQuery.refetch()
            },
            onError: (error) => {
                console.log(error)
            }
        })

    const removeFavorite = useMutation(id => {
        return axios.post(`${process.env.REACT_APP_API_URL}/posts/removeLike`, { post_id, user_id })
    },
        {
            onSuccess: (result) => {
                postQuery.refetch()
            },
            onError: (error) => {
                console.log(error)
            }
        })

    const checkForIfFavorite = () => {
        const result = post.favorites.filter(fav => fav.user_id === user_id)
        if (result.length > 0) return true
        return false
    }

    const handleFavorite = () => {
        const isFav = checkForIfFavorite()
        const currentFav = post.favorites.filter(fav => fav.user_id === user_id)
        const favId = currentFav.length > 0 ? currentFav[0].id : null
        console.log(isFav, currentFav, favId)
        if (isFav && favId) {
            removeFavorite.mutate(favId)
        }
        else if (!isFav && !favId) {
            addFavorite.mutate()
        }
        else {
            return null
        }
    }

    const renderFavoriteButton = () => {
        return checkForIfFavorite()
            ? (<AiFillHeart size="2rem" className="drop-shadow-xl" onClick={handleFavorite} />)
            : (<AiOutlineHeart size="2rem" className="drop-shadow-xl" onClick={handleFavorite} />)
    }

    // Comment Mutations
    const commentMutation = useMutation(data => {
        return axios.post(`${process.env.REACT_APP_API_URL}/comments`, data)
    },
        {
            onSuccess: (result) => {
                postQuery.refetch()
            },
            onError: (error) => {
                console.log(error)
                setCommentError(true)
            }
        })

    const onSubmit = data => commentMutation.mutate({
        content: data.comment,
        user_id,
        post_id
    })

    const renderComments = () => {
        return post.comments
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .map(comment => (
                <div key={comment.id} className="flex px-5 mb-5 md:w-2/3 lg:w-2/4 md:mx-auto">
                    <div className="flex flex-col justify-center items-center" style={{ minWidth: '50px', maxWidth: '50px' }} key={comment.id}>

                        <Link to={`/profile/${comment.user.username}`}>
                            <img className="rounded-full w-28" src={comment.user.avatar_url} alt={comment.user.username} />
                        </Link>

                        <div className="text-red-500 flex items-center justify-center mt-1">
                            <AiFillHeart size="1rem" className="drop-shadow-xl" />
                            <h4 className="font-inter font-bold">{abbreviate(comment.user.likes)}</h4>
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
        postQuery.isLoading ? <Loader /> :
            <div>
                <div className="flex items-center justify-center mx-2">
                    <Link to={`/profile/${post.user.username}`}>
                        <div className="flex justify-center items-center pt-5 pb-2 pl-2 gap-2">
                            <img className="rounded-full w-14" src={post.user.avatar_url} alt={post.user.username} />

                            <div className="flex flex-col">
                                <h2 className="font-intar text-md font-bold">{post.user.username}</h2>

                                <div className="text-red-500 text-xs flex items-center">
                                    <AiFillHeart size="1rem" className="drop-shadow-xl" />
                                    <h4 className="font-inter font-bold">{abbreviate(post.user.likes)}</h4>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="flex justify-center items-center mx-2 relative">
                    {
                        post.user.id === user_id ? (
                            <div onClick={removePost.mutate} className="absolute top-0 right-0 left-0 mx-auto flex justify-end sm:w-2/3 lg:w-3/6 xl:w-2/6  text-black text-xl cursor-pointer">
                                <AiFillCloseCircle className="bg-white rounded-full" />
                            </div>
                        ) : null
                    }

                    <img className="shadow-xl mx-auto sm:w-2/3 lg:w-3/6 xl:w-2/6 rounded-xl" src={post.image_url} alt={post.title} />
                </div>

                <div className="text-red-500 gap-1 flex justify-center items-center mt-5 cursor-pointer">
                    {renderFavoriteButton()}
                    <h4 className="font-inter font-bold text-xl">{post.favorites.length}</h4>
                </div>

                <h3 className="font-inter font-bold text-center text-lg opacity-40 my-10">
                    <Moment fromNow>{post.created_at}</Moment>
                </h3>

                <div className="flex justify-center text-blue-500 mt-10 mb-2 items-center font-inter font-bold text-md">
                    <BiCommentDetail size="1.2rem" className="mr-1 " />
                    <h2 className="mr-1">{post.comments.length}</h2>
                    <h3>Comments</h3>
                </div>

                <hr className="bg-blue-200 opacity-75 h-0.5 rounded-full md:w-72 mx-10 md:mx-auto mb-5" />

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-end px-10 mb-10">
                    <textarea
                        className="w-full md:w-2/3 xl:w-2/4 md:mx-auto rounded-xl p-3 shadow-md font-inter font-bold text-xs mb-2"
                        {...register('comment', { minLength: 1, maxLength: 160 })}
                        rows="2"
                        maxLength="160"
                        minLength="1"
                        placeholder="Leave a comment..."
                        required
                    />

                    <div className="w-full md:w-2/3 xl:w-2/4 md:mx-auto flex justify-between items-center">
                        <input className="font-inter font-bold shadow-xl text-xs py-1 px-4 rounded-2xl bg-blue-500 text-white cursor-pointer" type="submit" value="Add" />
                        {commentError && <p className="text-xs text-red-600">Error: Something Went Wrong.</p>}
                        <p className="font-inter font-thin text-xs text-right">{watch('comment')?.length || 0}/160</p>
                    </div>
                </form>

                {renderComments()}

            </div>
    )
}

export default PostDetails
