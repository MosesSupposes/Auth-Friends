import { 
    GET_FRIENDS_START, 
    GET_FRIENDS_SUCCESS, 
    GET_FRIENDS_FAILURE
} from '../actions'

const initialState = {
    fetching: false,
    friendsList: []
}

export default function friendsReducer(state=initialState, action) {
    switch(action.type) {
        case GET_FRIENDS_START:
            return {
                ...state, 
                fetching: true,
            }

        case GET_FRIENDS_SUCCESS:
            return {
                ...state,
                fetching: false,
                friendsList: action.payload
            }
            
        case GET_FRIENDS_FAILURE:
            return {
                ...state,
                fetching: false
            }    
        
        default: 
            return state
    }
}