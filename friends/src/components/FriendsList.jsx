import React, { useEffect } from 'react'
import { connect }  from 'react-redux'
import { getFriends } from '../store/actions'

function FriendsList(props) {
    useEffect(() => {
        props.getFriends()
    }, [])
    
    return (
        <div>
            {props.friends.map(friend => (
                <Friend key={friend.id} {...friend} />
            ))}
        </div>
    )
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
    friends: state.friends.friendsList
})

const mapActionsToProps = {
    getFriends
}

export default connect(
    mapStateToProps, 
    mapActionsToProps
)(FriendsList) 