import { Component } from "react";

class Die extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            roll : 0
        }
    }

    handleClick(){
        let { sides } = this.props;
        let random = Math.random();
        let number = Math.floor(random * sides)

        this.setState(
            {
                roll : number
            }
        )
    }

    render() {

        let { roll } = this.state;

        return (
            <>
                <h1> Roll the Dice </h1>
                <p onClick = {this.handleClick} className="btn btn-dark"> { roll } </p>
            </>
        )
    }
}

export default Die;