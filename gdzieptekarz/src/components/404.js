import React from 'react';

export default class NotFound extends React.Component{
    render(){
        return(
            <div>
                <p>Nothing to see here </p>
                <img alt='404' src='https://i.ytimg.com/vi/ICYzs55h6IQ/maxresdefault.jpg' />
                <a href='/'>Go back </a>
                </div>
            
        )
    }
}