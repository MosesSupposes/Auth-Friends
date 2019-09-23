import { combineReducers } from 'redux'

import loginReducer from './loginReducer'
import friendsReducer from './friendsReducer'

const rootReducer = 
    combineReducers({
        login: loginReducer,
        friends: friendsReducer
    })

export default rootReducer