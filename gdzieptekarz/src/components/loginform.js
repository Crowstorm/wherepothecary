import React from 'react'
import Validator from 'validator'
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    onChange = (e) => {
        //obsluga 2 naraz
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        })
    }

    onSubmit = (e) =>{
        e.preventDefault()
        //handle errory
        const errors = this.validate(this.state.data);
        this.setState({errors});
        //sprawdz jak w lodashu
        if(Object.keys(errors).length ===0){
            this.props.submit(this.state.data);
        }
    }

    validate = (data) =>{
        const errors ={};
        //validacja maila
        if(!Validator.isEmail(data.email)){
            errors.email = 'Niepoprawny email';
        }
        //validacja hasla
        if(!data.password){
            errors.password = 'Proszę podać hasło';
        }
        //zwroc errory dla object.keys
        return errors;
    }

    render() {
        const {data, errors} = this.state;
    
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' label='email' name='email' placeholder='email' value={data.email} onChange={this.onChange}/> <br />
                    {errors.email && <div>{errors.email}</div>}
                    <input type='text' label='password' name='password' placeholder='password' value={data.password} onChange={this.onChange}/> <br />
                    {errors.password && <div>{errors.password}</div>}
                    <button className='btn'>Login</button>
                </form>
            </div>
        )
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginForm