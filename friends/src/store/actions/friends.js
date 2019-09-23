import axiosWithAuth from '../../utils/axiosWithAuth'

export const GET_FRIENDS_START = "GET_FRIENDS_START"
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS"
export const GET_FRIENDS_FAILURE = "GET_FRIENDS_FAILURE"

export const getFriends = () => dispatch => {
    dispatch({ type: GET_FRIENDS_START })
    axiosWithAuth().get('/friends')
    .then(res => {
        dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({type: GET_FRIENDS_FAILURE, })
        console.error(err)
    })
}


export const ADD_FRIEND_START = "ADD_FRIEND_START"
export const ADD_FRIEND_SUCCESS = " ADD_FRIEND_SUCCESS"
export const ADD_FRIEND_FAILURE = " ADD_FRIEND_FAILURE"

export const addFriend = friend => dispatch => {
    dispatch({ type: ADD_FRIEND_START })
    axiosWithAuth().post('/friends', friend)
    .then(res => {
        dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({ type: ADD_FRIEND_START })
    })
}


export const EDIT_FRIEND_START = "EDIT_FRIEND_START"
export const EDIT_FRIEND_SUCCESS = "EDIT_FRIEND_SUCCESS"
export const EDIT_FRIEND_FAILURE = "EDIT_FRIEND_FAILURE"

export const startEditingFriend = id => {
    return { type: EDIT_FRIEND_START, payload: id }
}

export const editFriend = details => (dispatch, getState) => {
    const { friends: { friendToEditId: id }  } = getState()
    axiosWithAuth().put(`/friends/${id}`, details)
    .then(res => {
        dispatch({ type: EDIT_FRIEND_SUCCESS, payload: res.data})
    })
    .catch(res => {
        dispatch({ type: EDIT_FRIEND_FAILURE })
        console.error(res)
    })
}


export const DELETE_FRIEND_START = "DELETE_FRIEND_START"
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS"
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE"

export const deleteFriend = id => dispatch => {
    dispatch({ type: DELETE_FRIEND_START })
    axiosWithAuth().delete(`/friends/${id}`)
    .then(res => {
        console.log('DELETE SUCCESS RES', res)
        dispatch({ type:  DELETE_FRIEND_SUCCESS, payload: res.data })
    })
    .catch(res => {
        dispatch({ type: DELETE_FRIEND_FAILURE })
        console.error(res)
    })
}
