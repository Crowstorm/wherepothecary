import React from 'react';

class MainPage extends React.Component{
    render(){
        return(
            <div>
                <h1>WHEREPOTHECARY</h1>
                <div><a href='/signUp'>Sign up</a></div>
                <div><a href='/forgottenPassword'>Forgot password?</a></div>
                <div><a href='/register'>Not registered yet?</a></div>
                <div><a href='/panel'>Panel Apteki</a></div>
                <div><a href='/unregistered'>Panel niezalogowanego uzytkownika</a></div>
            </div>
        )
    }
}

export default MainPage