import { Component } from 'react';

class MinimumLength extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            input : ""
        }
    }

    handleChange(e){
        this.setState({
            input : e.currentTarget.value
        })
    }

    render() {
        
        let warningStyle = {
            display : this.state.input.length < this.props.length ? "" : "none"
        }

        return (
            <>
                <h1> Minimum Length</h1>
                <input type="text" onChange = {this.handleChange} value={this.state.input}></input>
                <p style = {warningStyle}>Too short!</p>
                <p style = {warningStyle}> Minimum length is {this.props.length}</p>
            </>
        )
    }
}

export default MinimumLength;