import React from 'react'
import { Redirect, Route } from 'react-router'

const ProtectedRoute = ({ children, ...rest }) => {
    const isLoggedIn = window.localStorage.getItem('galli_token')

    return (
        <Route {...rest} render={() => isLoggedIn ? children : <Redirect to="/login" />} />
    )
}

export default ProtectedRoute
