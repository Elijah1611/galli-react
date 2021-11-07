import axios from 'axios'
import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

const ProfilePost = ({ id, image, numOfLikes, numOfComments, favorites, refetch }) => {

    const token = localStorage.getItem('galli_token')
    const { id: user_id, username } = jwtDecode(token);

    const addFavorite = useMutation(() => {
        return axios.post(`${process.env.REACT_APP_API_URL}/posts/addLike`, { post_id: id, user_id })
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
        return axios.post(`${process.env.REACT_APP_API_URL}/posts/removeLike`, { post_id: id, user_id })
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
        <div className="mx-auto w-full md:w-[600px]">
            <Link to={`/post/${id}`}>
                <div className="rounded-xl cursor-pointer">
                    <img src={image} alt="Post" className="rounded-xl" />
                </div>
            </Link>

            <div className="flex justify-between">
                <div className="mt-1 flex items-center cursor-pointer">
                    {renderFavoriteButton()}
                    <h2 className="text-red-600 font-bold font-inter" >{numOfLikes}</h2>
                </div>

                <div className="mt-1 flex items-center">
                    <h2 className="mr-1" >{numOfComments}</h2>
                    <BiCommentDetail size="1.8rem" className="mr-1" />
                </div>
            </div>
        </div>
    )
}

export default ProfilePost
