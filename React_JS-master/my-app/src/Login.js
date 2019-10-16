import React from 'react'
import store from './Redux/store.js'
import { updateUser } from './Redux/actions/updateUser.js'
import Alert from './Alert.js'

class Login extends React.Component  {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    checkInput = (event) => {
        const inputValue = event.target.value
        if(event.target.value.indexOf('@') <= 0 ) {
            console.log('imas greska u mejlo')
        }
        this.saveInput(event);
    }

    saveInput = (event) => {
        this.setState({ [event.target.id]: event.target.value})
    }

    submit = () => {
        store.dispatch(updateUser(
            this.state.username,
            this.state.password
            )
        )
        
    }

    render () {
        return (
            <React.Fragment>
                <Alert />
                <input 
                    id ='username' 
                    placeholder='Username' 
                    onChange={this.checkInput}
                />
                <input 
                    id ='password' 
                    placeholder='Password' 
                    onChange={this.saveInput}
                />
                <button id='submit' onClick={this.submit}>Log in!</button>
            </React.Fragment>
        )
    }
}

export default Login