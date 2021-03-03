import { Component } from "react";

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
                <div className="form-group">
                    <label>Password Strength Test</label>
                    <input className="form-control" onChange = {this.handleChange} style = {inputStyle}/>
                </div>
            </>
            );

    }

}

export default PasswordStrength;