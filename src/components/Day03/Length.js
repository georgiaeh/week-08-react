import { Component } from "react";

class Length extends Component {
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

        return (
            <>
                <br></br>
                <h1>Length Input</h1>
                <div className="form-group">
                    <label>Length: {this.state.input.length}</label>
                    <input className="form-control" onChange = {this.handleChange} value={this.state.input} />
                </div>
            </>
            );

    }

}

export default Length;