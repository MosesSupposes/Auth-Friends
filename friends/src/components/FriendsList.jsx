import React, { useEffect } from 'react'

//redux
import { connect }  from 'react-redux'
import { 
    getFriends,
    startEditingFriend,
    deleteFriend 
} from '../store/actions'

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
                    <Friend 
                        key={friend.id} 
                        {...friend} 
                        startEditingFriend={props.startEditingFriend}
                        deleteFriend={props.deleteFriend}
                    />
                ))}
            </div>
        )
    }
} 

function Friend(props) {
    const startEditingFriend = () => props.startEditingFriend(props.id)
    const deleteFriend = () => props.deleteFriend(props.id)
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.age} years old</p>
            <p>{props.email}</p>

            <button onClick={startEditingFriend}>Edit</button>
            <button onClick={deleteFriend}>Delete</button>
        </div>
    )
}

const mapStateToProps = state => ({
    friends: state.friends.friendsList,
    loading: state.friends.loading
})

const mapActionsToProps = {
    getFriends,
    startEditingFriend,
    deleteFriend
}

export default connect(
    mapStateToProps, 
    mapActionsToProps
)(FriendsList) 