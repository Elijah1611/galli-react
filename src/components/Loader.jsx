import React from 'react'
import { ImSpinner9 } from 'react-icons/im'

const Loader = () => {
    return (
        <div className="flex justify-center items-center">
            <ImSpinner9 className="animate-spin text-7xl m-10" />
        </div>
    )
}

export default Loader
