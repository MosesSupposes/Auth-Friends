import { 
    GET_FRIENDS_START, 
    GET_FRIENDS_SUCCESS, 
    GET_FRIENDS_FAILURE,

    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILURE
} from '../actions'

const initialState = {
    loading: false,
    friendsList: []
}

export default function friendsReducer(state=initialState, action) {
    switch(action.type) {
        case GET_FRIENDS_START:
            return {
                ...state, 
                loading: true,
            }

        case GET_FRIENDS_SUCCESS:
            return {
                ...state,
                loading: false,
                friendsList: action.payload
            }
            
        case GET_FRIENDS_FAILURE:
            return {
                ...state,
                loading: false
            }    
        
        case ADD_FRIEND_START: 
            return {
                ...state,
                loading: true
            }

        case ADD_FRIEND_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    friendsList: action.payload
                }
        
        case ADD_FRIEND_FAILURE:
            return {
                ...state,
                loading: false
            }

        default: 
            return state
    }
}