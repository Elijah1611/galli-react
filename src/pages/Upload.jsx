import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Heading from '../components/Heading'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { ImSpinner9 } from 'react-icons/im'
import { useMutation } from 'react-query'
import axios from 'axios';

const Upload = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const imageFile = watch('image')
    const [disableSubmit, setDisableSubmit] = useState(false)

    const postMutation = useMutation(data => {
        return axios.post('http://localhost:7000/api/posts', data)
    })

    const uploadMutation = useMutation(data => {
        return axios.post('http://localhost:7000/api/upload/image', data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    },
        {
            onSuccess: (result) => {
                postMutation.mutate({
                    title: 'Title',
                    image_url: `http://${result.data.imageLoc}`,
                    user_id: localStorage.getItem('galli_user_id')
                })
            }
        })


    const onSubmit = files => {
        const image = files.image[0]
        console.log(image)
        const formData = new FormData()
        formData.append('image', image)
        uploadMutation.mutate(formData)
        setDisableSubmit(true)
    }

    const previewImage = () => {
        return uploadMutation.isSuccess ? (
            <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
                <img src={`http://${uploadMutation.data.data.imageLoc}`} alt="Image" />
            </div>
        ) : null
    }

    const successMessage = () => {
        return uploadMutation.isSuccess ? <div className="text-center mt-2">Upload Complete!</div> : null
    }

    const errorMessage = () => {
        return uploadMutation.isError ? (
            <div className="text-center">An error occurred: {uploadMutation.error.message}</div>
        ) : null
    }

    const loader = () => {
        return uploadMutation.isLoading ? (<div className="flex justify-center items-center">
            <ImSpinner9 className="animate-spin text-7xl text-blue-500 m-10" />
        </div>) : null
    }


    return (
        <div>
            <Heading title="Upload" />


            {previewImage()}

            {loader()}

            {successMessage()}

            {errorMessage()}


            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-center mt-10'>
                    <label
                        className={`${disableSubmit ? 'opacity-50' : ''} w-64 flex flex-col items-center px-4 py-6 text-blue-500 hover:bg-blue-600 hover:text-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer ease-linear transition-all duration-150`}>
                        <AiOutlineCloudUpload className="text-3xl" />
                        <span className="mt-2 text-base leading-normal">Select a file</span>
                        <input type='file' className="hidden" accept="image/png, image/jpeg" onChange={() => setDisableSubmit(false)} {...register('image')} />
                    </label>
                </div>
                <p className="text-center text-sm mt-2">{imageFile ? imageFile[0]?.name : null}</p>

                <div className="flex flex-col justify-center items-center gap-5 mb-8 mt-12">
                    <button
                        className="font-inter font-bold shadow-md active:shadow-sm px-12 py-4 rounded-2xl text-white bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={(disableSubmit && imageFile) || !imageFile}
                    >
                        {disableSubmit && imageFile ? 'Uploaded' : 'Upload'}
                    </button>
                    <Link to='/discover'>
                        <button
                            className="font-inter font-bold bg-blue-500 text-white shadow-md active:shadow-sm px-10 py-4 rounded-2xl"
                        >
                            Discover
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Upload
