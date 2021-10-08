import React from 'react'
import { Redirect } from 'react-router'

const Protected = ({ children }) => {
    const isLoggedIn = window.localStorage.getItem('token')

    return (
        <React.Fragment>
            {
                isLoggedIn
                    ? (
                        <React.Fragment>{children}</React.Fragment>
                    ) : <Redirect to="/login" />
            }
        </React.Fragment>
    )
}

export default Protected
