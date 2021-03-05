import { Component } from "react";
import { Form } from 'react-bootstrap';

class PasswordStrength extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            input : ""
        }
    }

    handleChange(e) {
        this.setState({
            input : e.currentTarget.value
        });
    }

    render() {

        let length = this.state.input.length;

        let color = length === 0 ? "" 
                    : length < 9 ? "red" 
                    : length < 16 ? "orange" 
                    : "green"

        let inputStyle = {
            backgroundColor : color
        }
        
        return (
            <>
                <br></br>
                <h1>Password Strength</h1>
                <Form.Group>
                    <Form.Label>Password Strength Test</Form.Label>
                    <Form.Control onChange = {this.handleChange} style = {inputStyle} value = {this.state.input}/>
                </Form.Group>
            </>
            );

    }

}

export default PasswordStrength;