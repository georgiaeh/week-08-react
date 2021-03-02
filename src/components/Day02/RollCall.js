import { Component } from "react";

class RollCall extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            position : 0 //index in the names array, passed in as a prop
        }
    }

    handleClick() {
        let { names } = this.props;
        let { position } = this.state;
        let max = names.length;

        (position === max-1 ) ? this.setState({
            position : 0        //if reached end of array, go back to begining of array
        })
        : this.setState({
            position : position + 1     //advance one forward in array
        })

    }

    render() {
        let { names } = this.props;
        let { position } = this.state;
        let name = names[position];

        return (
            <>
                <br></br>
                <h1> Roll Call </h1>
                <p> {name} </p>
                <button type="button" className="btn btn-info" onClick = {this.handleClick}>Next</button>
            </>)
    }
}


export default RollCall;