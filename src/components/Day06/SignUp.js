import { Component } from 'react';
import Password from './Password';

class SignUp extends Component
{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            password: "",
            confirm: "",
        }
    }

    handleChange(e, item) {
        this.setState({
            [item]: e.currentTarget.value
        })
        }

    render(){

        let { password, confirm } = this.state;
        let { minLength } = this.props
        let valid = (password === confirm) 
                    && (password.length >= minLength);
        return(
            <>
            <h1>Sign Up</h1>
                <Password 
                    label = "Password" 
                    minLength = {this.props.minLength} 
                    value = {this.state.password}
                    onChange = { (e) => this.handleChange(e, "password")}
                    valid = {valid}
                />
                <Password 
                    label = "Confirm Password" 
                    minLength = {this.props.minLength}
                    value = {this.state.confirm}
                    onChange = { (e) => this.handleChange(e, "confirm")}
                    valid = {valid}
                />
            </>
        )
    }
}

export default SignUp;