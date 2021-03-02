import { Component } from "react";

class Clicked extends Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            clicked: false
        }
    }

    handleClick() {
        this.setState({
            clicked: true
        })
    }

    render() {

        let { clicked } = this.state;

        return (
            <>
                <br></br>
                <h1> Clicked Button </h1>
                <button type="button" className="btn btn-primary" onClick = {this.handleClick}> { clicked ? "Clicked" : "Not Clicked" }</button>
            </>
        )

    }

}

export default Clicked