import React from 'react'
import { useParams } from 'react-router'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import ProfilePost from '../components/ProfilePost'

const Profile = () => {
    const params = useParams()

    return (
        <div>
            <div className="flex flex-col justify-center items-center gap-4 mt-10 mb-5">
                <img className="rounded-full w-48 shadow-xl" src="https://i.pravatar.cc/300?img=36" alt={params.user_id} />
                <h2 className="font-inter font-bold text-3xl">{params.user_id}</h2>
            </div>

            <div className="flex justify-center items-center gap-2 mb-10">
                <AiFillHeart size="2.5rem" className="text-red-500 drop-shadow-xl" />
                <h2 className="font-inter font-bold text-lg text-red-500">52,345</h2>
            </div>

            <div className="mb-10">
                <h3 className="font-inter font-bold ml-5 mb-1">Jessica Sky</h3>
                <p className="font-inter font-thin px-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus sed soluta at dolores maxime asperiores porro numquam delectus obcaecati.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 px-5 pb-10">
                <ProfilePost
                    image="https://images.unsplash.com/photo-1633511090164-910b108d3442?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80"
                    numOfLikes="2k"
                    numOfComments="11"
                />
                <ProfilePost
                    image="https://images.unsplash.com/photo-1633525057676-8185c059e1ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
                    numOfLikes="4k"
                    numOfComments="67"
                />
                <ProfilePost
                    image="https://images.unsplash.com/photo-1633511090164-910b108d3442?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80"
                    numOfLikes="1k"
                    numOfComments="0"
                />
            </div>
        </div>
    )
}

export default Profile