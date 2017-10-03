import React from 'react';
import LoginForm from './loginform'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';

import { login } from '../actions/auth'



class LoginPage extends React.Component {

    submit = (data) => {
        console.log(data)
        this.props.login(data).then(() => this.props.history.puh("/"))
    }

    

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>WHEREPOTHECARY</h1>
                <LoginForm submit={this.submit}/>
                <div><a href='/forgottenPassword'>Forgot password?</a></div>
                <div><a href='/register'>Not registered yet?</a></div>
            </div>
        )
    }
}

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired,
    dispatch: PropTypes.func
}

export default connect(null, { login })(LoginPage)