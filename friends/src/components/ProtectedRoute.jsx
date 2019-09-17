import React from 'react'
import Route from 'react-router-dom'

export default function ProtectedRoute({ component: Component,  ...rest  }) {
    // Private Route rules:
    // 1. It has the same API as <Route />.
    // 2. It renders a <Route /> and passes all the props through to it.
    // 3. It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.
    return (
        <Route 
            {...rest}
            render={props => (
                localStorage.getItem('token')
                    ? <Component {...props} />
                    : <Redirect to='/login' />
            )}
        />
    )
}