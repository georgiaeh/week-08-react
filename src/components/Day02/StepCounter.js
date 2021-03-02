import { Component } from "react";

class StepCounter extends Component {
    constructor(props){
        super(props);

        this.increaseClick = this.increaseClick.bind(this);
        this.decreaseClick = this.decreaseClick.bind(this);

        this.state= {
            number : 0
        }
    }

    increaseClick() {
        let { number } = this.state;
        let { max , step } = this.props;

        number >= max ? this.setState({
            number : number
            }) :
            this.setState({
            number : number + step
            })
    }

    decreaseClick() {
        let { number } = this.state;
        let { step } = this.props;

        number === 0 ? this.setState({
            number: 0
        }) : 
        this.setState({
            number : number - step
        })
    }

    render() {


        return (
            <>
                <br></br>
                <h1> Step Counter</h1>
                <button type="button" className="btn btn-success" onClick = {this.increaseClick}> + </button>
                <button type="button" className="btn btn-danger" onClick = {this.decreaseClick}> - </button>
                <p> {this.state.number} </p>
            </>
        )
    }
}

export default StepCounter;