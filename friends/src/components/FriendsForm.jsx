import React from 'react'

//redux
import { connect } from 'react-redux'
import { addFriend, editFriend } from '../store/actions'

//custom hooks
import { useInput } from '../utils/hooks/useInput'


function FriendsForm(props) {
    const initialState = {
        name: '',
        age: '',
        email: ''
    }
    
    const [friend, setFriend, handleChanges] = useInput(initialState)
    
    const handleSubmit = (e) => {
        if (props.editing) {
            e.preventDefault()
            props.editFriend(friend)
            setFriend(initialState)
        } else {
            e.preventDefault()
            props.addFriend(friend)
            setFriend(initialState)
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="name"
                value={friend.name}
                onChange={handleChanges}
            />
            <input type="text"
                name="age"
                value={friend.age} 
                onChange={handleChanges}
            />           
            <input type="text" 
                name='email'           
                value={friend.email} 
                onChange={handleChanges}
            />    
            <button>Add Friend</button>
        </form>
    )
}

const mapStateToProps = state => ({
    editing: state.friends.editing
})

const mapActionsToProps = {
    addFriend,
    editFriend
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(FriendsForm)