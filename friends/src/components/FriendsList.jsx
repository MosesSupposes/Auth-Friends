import React from 'react'
import { connect }  from 'react-redux'

function FriendsList(props) {
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

export default connect(mapStateToProps, {})(FriendsList) 