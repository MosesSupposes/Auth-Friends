import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProtectedRoute({ component: Component,  ...rest  }) {
    // Private Route rules:
    // 1. It has the same API as <Route />.
    // 2. It renders a <Route /> and passes all the props through to it.
    // 3. It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.

    const { authToken  } = useSelector(state => ({
        authToken: state.login.authToken
    }))

    return (
        <Route 
            {...rest}
            render={props => {
               return (localStorage.getItem('token') === authToken) 
                    ? <Component {...props} />
                    : <Redirect to='/login' />
            }}
        />
    )
}