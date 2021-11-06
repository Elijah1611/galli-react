import React from 'react'

const Heading = ({ title }) => {
    return <h1 className="font-inter font-bold sm:text-center text-5xl m-5 mt-8" data-testid="title">{title}</h1>
}

export default Heading
