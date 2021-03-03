import { Component } from "react";

class Adder extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    

        this.state = {
            input : "",
            numbers: []
        }
    }

    handleClick() {

        let { numbers} = this.state;
        let { input } = this.state;

        this.setState({
            numbers : [...numbers, input]
        })
    }

    handleChange(e) {
        this.setState({
            input : e.currentTarget.value
        })
        console.log(this.state);
    }

    render() {

        return (
            <>
                <br></br>
                <h1>Adder</h1>
                <div className="form-group">
                    <label >Number to add:</label>
                    <input type = "number" className="form-control" onChange = {this.handleChange} value = {this.state.input}/>
                    <button type="button" className="btn btn-primary" onClick = {this.handleClick}> Add</button>
                </div>
                <h6> Numbers </h6>
                <p>{this.state.numbers.reduce( (acc, num) => {
                    return acc + num.toString() + "+ ";
                }, "")}</p>
                <h6> Total </h6>
                <p> {this.state.numbers.reduce( (acc, num) => {
                    return acc + parseFloat(num);
                }, 0)}</p>
            </>
            );

    }

}

export default Adder;