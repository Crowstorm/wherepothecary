import React from 'react';

class SignUp extends React.Component{
    render(){
        return(
            <div>
                <h1>WHEREPOTHECARY</h1>
                <form>
                    <input type='text' placeholder='username' />
                    <input type='text' placeholder='password' />
                    <button>Submit</button>
                </form>
                <div><a href='/forgottenPassword'>Forgot password?</a></div>
                <div><a href='/register'>Not registered yet?</a></div>
            </div>
        )
    }
}

export default SignUp