import { Component } from "react";

class Counter extends Component {
    constructor(props){
        super(props);

        this.increaseClick = this.increaseClick.bind(this);
        this.decreaseClick = this.decreaseClick.bind(this);

        this.state= {
            number : props.initial
        }
    }

    increaseClick() {
        let { number } = this.state;
        let { max } = this.props;

        number >= max ? this.setState({
            number : number
            }) :
            this.setState({
            number : number + 1
            })
    }

    decreaseClick() {
        let { number } = this.state;

        number === 0 ? this.setState({
            number: 0
        }) : 
        this.setState({
            number : number - 1
        })
    }

    render() {


        return (
            <>
                <br></br>
                <h1> Increase and Decrease Counter</h1>
                <button type="button" className="btn btn-success" onClick = {this.increaseClick}> + </button>
                <button type="button" className="btn btn-danger" onClick = {this.decreaseClick}> - </button>
                <p> {this.state.number} </p>
            </>
        )
    }
}

export default Counter;