import { Component } from "react";

class ToggleText extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        
        this.state = {
            clicked : true
        }
    }

    handleClick(){

        let { clicked } = this.state;

        this.setState({
            clicked : !clicked 
        })
    }

    render() {

        let { clicked } = this.state;

        return (
            <>
                <br></br>
                <h1>Toggle Text </h1>
                <p>{clicked ? this.props.initial : this.props.alternate}</p>
                <button type="button" className="btn btn-primary" onClick = {this.handleClick} > Toggle Text </button>
            </>
        )
    }
}

export default ToggleText;