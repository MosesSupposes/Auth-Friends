import React, { useEffect } from 'react'

//redux
import { connect }  from 'react-redux'
import { getFriends } from '../store/actions'

//components
import FriendsForm from './FriendsForm'

function FriendsList(props) {
    useEffect(() => {
        props.getFriends()
    }, [])
    
    if (props.loading) {
        return <p>Loading...</p>
    } else {
        return (
            <div>
                <FriendsForm />
                {props.friends.map(friend => (
                    <Friend key={friend.id} {...friend} />
                ))}
            </div>
        )
    }
} 

function Friend(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.age} years old</p>
            <p>{props.email}</p>
        </div>
    )
}

const mapStateToProps = state => ({
    friends: state.friends.friendsList,
    loading: state.friends.loading
})

const mapActionsToProps = {
    getFriends
}

export default connect(
    mapStateToProps, 
    mapActionsToProps
)(FriendsList) 