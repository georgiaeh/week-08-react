import { Component } from "react";

class Transform extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
            input : "",
        }
    }

    handleChange(e) {
        this.setState({
            input : e.currentTarget.value
        })
    }

    render() {

        let { transform } = this.props;

        return (
            <>
                <br></br>
                <h1>Transform Mathematically</h1>
                <div className="form-group">
                    <label >Number to transform:</label>
                    <input type = "number" className="form-control" onChange = {this.handleChange} value = {this.state.input}/>
                </div>
                <h6> Output </h6>
                <p> {transform(this.state.input)} </p>
            </>
            );

    }

}

export default Transform;