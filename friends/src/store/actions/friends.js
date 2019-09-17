import axiosWithAuth from '../../utils/axiosWithAuth'

export const GET_FRIENDS_START = "GET_FRIENDS_START"
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS"
export const GET_FRIENDS_FAILURE = "GET_FRIENDS_FAILURE"

export const getFriends = () => dispatch => {
    dispatch({ type: GET_FRIENDS_START })
    axiosWithAuth().get('/friends')
    .then(res => {
        console.log(res)
        dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        dispatch({type: GET_FRIENDS_FAILURE, })
        console.error(err)
    })
}