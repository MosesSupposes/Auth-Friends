import { 
    GET_FRIENDS_START, 
    GET_FRIENDS_SUCCESS, 
    GET_FRIENDS_FAILURE,

    ADD_FRIEND_START,
    ADD_FRIEND_SUCCESS,
    ADD_FRIEND_FAILURE,

    EDIT_FRIEND_START,
    EDIT_FRIEND_SUCCESS,
    EDIT_FRIEND_FAILURE,

    DELETE_FRIEND_START,
    DELETE_FRIEND_SUCCESS,
    DELETE_FRIEND_FAILURE,
} from '../actions'

import * as R from 'ramda'

const initialState = {
    loading: false,
    friendsList: [],
    friendToEditId: null,
    editing: false
}

export default function friendsReducer(state=initialState, action) {
    switch(action.type) {
        case GET_FRIENDS_START:
            return R.assoc('loading', R.T(), state)

        case GET_FRIENDS_SUCCESS:
            return R.evolve(R.__, state)({
                loading: R.F,
                friendsList: R.always(action.payload)
            })
            
        case GET_FRIENDS_FAILURE:
            return R.assoc('loading', R.F(), state)
        
        case ADD_FRIEND_START: 
            return R.assoc('loading', R.T(), state)

        case ADD_FRIEND_SUCCESS:
                return R.evolve(R.__, state)({
                    loading: R.F,
                    friendsList: R.always(action.payload)
                })
        
        case ADD_FRIEND_FAILURE:
            return R.assoc('loading', R.F(), state)

        case EDIT_FRIEND_START:
            return R.evolve(R.__, state)({
                editing: R.T,
                friendToEditId: R.always(action.payload)
            })

        case EDIT_FRIEND_SUCCESS:
            return R.evolve(R.__, state)({
                editing: R.F,
                friendToEditId: R.always(null),
                friendsList: R.always(action.payload)
            })

        case EDIT_FRIEND_FAILURE: 
            return R.evolve(R.__, state)({
                editing: R.F,
                friendToEditId: R.always(null)
            })
        
        case DELETE_FRIEND_START:
            return state

        case DELETE_FRIEND_SUCCESS: 
            return R.assoc('friendsList', action.payload, state)

        case DELETE_FRIEND_FAILURE:
            return state
            
        default: 
            return state
    }
}