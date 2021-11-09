import React from 'react'
import './App.css'
import {useAuth} from "./context/auth-context";
import {UnAuthenticatedApp} from './unAuthenticated'
import {AuthenticatedApp} from './authenticatedApp'

function App() {
    const {user} = useAuth()
    return (
        <div className={"App"}>
            {user ? <AuthenticatedApp/> : <UnAuthenticatedApp/>}
        </div>
    )
}

export default App;
