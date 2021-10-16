import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Navbar from "../components/Navbar";
import ProfileNavbar from "../components/ProfileNavbar";

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import EditProfile from '../pages/EditProfile';
import RemoveProfile from '../pages/RemoveProfile';
import Login from '../pages/Login'
import Register from '../pages/Register'
import Discover from '../pages/Discover'
import Favorites from '../pages/Favorites'
import PostDetails from '../pages/PostDetails'
import Map from '../pages/Map'
import Upload from '../pages/Upload';

const GalliRouter = () => {
    return (
        <Router>
            {/* <ProfileNavbar /> */}
            <Navbar />
            <div className="h-16"></div>

            <Switch>
                <Route exact path="/discover">
                    <Discover />
                </Route>
                <Route exact path="/map">
                    <Map />
                </Route>
                <Route exact path="/upload">
                    <Upload />
                </Route>
                <Route exact path="/post/:post_id">
                    <PostDetails />
                </Route>
                <Route exact path="/favorites/:username">
                    <Favorites />
                </Route>
                <Route exact path="/profile/:username">
                    <Profile />
                </Route>
                <Route exact path="/profile/:username/edit">
                    <EditProfile />
                </Route>
                <Route exact path="/profile/:username/remove">
                    <RemoveProfile />
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
