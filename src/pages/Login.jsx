import React from 'react'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import '../App.scss';

const Login = () => {
    return (
        <div className="app">
            <Header loggedIn={true} />
            <LoginForm />
        </div>
    )
}

export default Login;
