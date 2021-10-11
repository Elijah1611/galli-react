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

    const mutation = useMutation(data => {
        return axios.post('http://localhost:7000/api/upload/image', data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
    })


    const onSubmit = files => {
        const image = files.image[0]
        console.log(image)
        const formData = new FormData()
        formData.append('image', image)
        mutation.mutate(formData)
        setDisableSubmit(true)
    }

    const previewImage = () => {
        return mutation.isSuccess ? (
            <div>
                <img src={`http://${mutation.data.data.imageLoc}`} alt="Image" />
            </div>
        ) : null
    }

    const successMessage = () => {
        return mutation.isSuccess ? <div className="text-center mt-2">Upload Complete!</div> : null
    }

    const errorMessage = () => {
        return mutation.isError ? (
            <div className="text-center">An error occurred: {mutation.error.message}</div>
        ) : null
    }

    const loader = () => {
        return mutation.isLoading ? (<div className="flex justify-center items-center">
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
                        className={`${disableSubmit ? 'opacity-50' : ''} w-64 flex flex-col items-center px-4 py-6 text-blue-500 hover:bg-blue-600 hover:text-white rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer ease-linear transition-all duration-150 hover:bg-blue-600`}>
                        <AiOutlineCloudUpload className="text-3xl" />
                        <span className="mt-2 text-base leading-normal">Select a file</span>
                        <input type='file' class="hidden" accept="image/png, image/jpeg" onChange={() => setDisableSubmit(false)} {...register('image')} />
                    </label>
                </div>
                <p className="text-center text-sm mt-2">{imageFile ? imageFile[0]?.name : null}</p>

                <div className="flex flex-col justify-center items-center gap-5 mb-8 mt-12">
                    <button
                        className="font-inter font-bold shadow-xl px-12 py-4 rounded-2xl text-white bg-green-500 hover:bg-green-600 disabled:opacity-50"
                        type="submit"
                        disabled={(disableSubmit && imageFile) || !imageFile}
                    >
                        {disableSubmit && imageFile ? 'Uploaded' : 'Upload'}
                    </button>
                    <Link to='/discover'>
                        <button
                            className="font-inter font-bold shadow-xl px-12 py-4 rounded-2xl"
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
