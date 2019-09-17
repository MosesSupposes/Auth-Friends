import React from 'react'

//redux
import { connect } from 'react-redux'
import { addFriend } from '../store/actions'

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
        e.preventDefault()
        props.addFriend(friend)
        setFriend(initialState)
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


export default connect(null, { addFriend })(FriendsForm)