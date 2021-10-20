import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from "../components/Navbar";

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import EditProfile from '../pages/EditProfile';
import RemoveProfile from '../pages/RemoveProfile';
import Login from '../pages/Login'
import Register from '../pages/Register'
import Discover from '../pages/Discover'
import Favorites from '../pages/Favorites'
import PostDetails from '../pages/PostDetails'
import Upload from '../pages/Upload';
import ProtectedRoute from './Protected';

const GalliRouter = () => {
    return (
        <Router>
            <Navbar />
            <div className="h-16"></div>

            <Switch>
                <ProtectedRoute exact path="/discover">
                    <Discover />
                </ProtectedRoute>

                <ProtectedRoute exact path="/upload">
                    <Upload />
                </ProtectedRoute>

                <ProtectedRoute exact path="/post/:post_id">
                    <PostDetails />
                </ProtectedRoute>

                <ProtectedRoute exact path="/favorites/:username">
                    <Favorites />
                </ProtectedRoute>

                <ProtectedRoute exact path="/profile/:username">
                    <Profile />
                </ProtectedRoute>

                <ProtectedRoute exact path="/profile/:username/edit">
                    <EditProfile />
                </ProtectedRoute>

                <ProtectedRoute exact path="/profile/:username/remove">
                    <RemoveProfile />
                </ProtectedRoute>

                <Route exact path="/register">
                    <Register />
                </Route>

                <Route exact path="/login">
                    <Login />
                </Route>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="*">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default GalliRouter
