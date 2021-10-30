import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import abbreviate from 'number-abbreviate'
import { Link } from 'react-router-dom'
import { useMutation } from 'react-query'
import axios from 'axios'
import Moment from 'react-moment'

const Post = ({ id, image, profileImage, username, numberOfLikes, numberOfComments, favorites, createdAt, refetch }) => {
    const user_id = localStorage.getItem('galli_user_id')

    const addFavorite = useMutation(() => {
        return axios.post('http://localhost:7000/api/favorites', { post_id: id, user_id })
    },
        {
            onSuccess: (result) => {
                refetch()
            },
            onError: (error) => {
                console.log(error)
            }
        })

    const removeFavorite = useMutation(fav_id => {
        return axios.delete(`http://localhost:7000/api/favorites/${fav_id}`)
    },
        {
            onSuccess: (result) => {
                refetch()
            },
            onError: (error) => {
                console.log(error)
            }
        })

    const checkForIfFavorite = () => {
        const result = favorites.filter(fav => fav.user_id === user_id)
        if (result.length > 0) return true
        return false
    }

    const handleFavorite = () => {
        const isFav = checkForIfFavorite()
        const currentFav = favorites.filter(fav => fav.user_id === user_id)
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
            ? (<AiFillHeart size="2.2rem" className="text-red-600 ml-1" onClick={handleFavorite} />)
            : (<AiOutlineHeart size="2.2rem" className="text-red-600 ml-1" onClick={handleFavorite} />)
    }

    return (
        <div className="p-2 mb-0 w-full md:mb-10 md:m-auto md:w-1/2 lg:w-2/4 xl:w-1/3">
            <h3 className="font-inter font-bold text-center">
                <Moment fromNow>{new Date(new Date(createdAt) + 'Z')}</Moment>
            </h3>

            <div className="shadow-xl rounded-3xl">
                <Link to={`/post/${id}`}>
                    <img className="rounded-3xl max-h-full w-full" src={image} alt={username} />
                </Link>

                <Link to={`/profile/${username}`}>
                    <div className="relative w-32 mx-auto">
                        <div className="absolute bottom-[-3rem] ml-auto mr-auto left-0 right-0 text-center">
                            <img className="rounded-full ml-auto mr-auto left-0 right-0 w-14 m-1" src={profileImage} alt={username} />
                            <h2 className="font-inter font-bold text-sm">{username}</h2>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="flex items-center justify-between">
                <div className="mt-1 flex items-center" onClick={() => console.log('You Liked this post!')}>
                    {renderFavoriteButton()}
                    <h2 className="text-red-600 font-bold font-inter" >{abbreviate(numberOfLikes)}</h2>
                </div>

                <Link to={`/post/${id}`}>
                    <div className="mt-1 flex items-center">
                        <h2 className="mr-1" >{abbreviate(numberOfComments)}</h2>
                        <BiCommentDetail size="1.8rem" className="mr-1" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Post
