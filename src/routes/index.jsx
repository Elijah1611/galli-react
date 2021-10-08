import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Discover from '../pages/Discover'

const GalliRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/discover">
                    <Discover />
                </Route>
                <Route exact path="/profile/:user_id">
                    <Profile />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default GalliRouter
