import React from 'react'
import Heading from '../components/Heading'
import MapButton from '../components/MapButton'

const Map = () => {
    const username = 'JessicaSky'

    return (
        <div>
            <Heading title="Map" />

            <div className="grid grid-cols-1">

                <MapButton
                    image="https://images.unsplash.com/photo-1513676135407-0cf0fa804058?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    title="Upload"
                    link="/upload"
                />

                <MapButton
                    image="https://images.unsplash.com/photo-1627842468152-62f95538037a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    title="Discover"
                    link="/discover"
                />

                <MapButton
                    image="https://images.unsplash.com/photo-1579069260854-450fadfff665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    title="Profile"
                    link={`/profile/${username}`}
                />

                <MapButton
                    image="https://images.unsplash.com/photo-1579069260854-450fadfff665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    title="Edit Profile"
                    link={`/profile/${username}/edit`}
                />

                <MapButton
                    image="https://images.unsplash.com/photo-1438201743149-3cc16cd4cddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    title="Favorites"
                    link={`/favorites/${username}`}
                />

                <span onClick={() => console.log('logout')}>
                    <MapButton
                        image="https://images.unsplash.com/photo-1571595323517-ecc797572609?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
                        title="Logout"
                        link="/"
                    />
                </span>
            </div>
        </div>
    )
}

export default Map
