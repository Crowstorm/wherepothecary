import React from 'react'

class Registration extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <input type='text' placeholder='username' />
                    <input type='text' placeholder='password' />
                    <input type='text' placeholder='adress' />
                    <input type='text' placeholder='phone number' />
                    <input type='text' placeholder='email' />
                    <button>Submit</button>
                </form>
                <div><a href='/'>Go back </a></div>
            </div>
        )
    }
}

export default Registration