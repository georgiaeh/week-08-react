import { Component } from "react";

class Colours extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            position : 0
        }
    }

    handleClick(){
        let { colours } = this.props;
        let { position } = this.state;
        let max = colours.length;

        (position === max-1 ) ? this.setState({
            position : 0        //if reached end of array, go back to begining of array
        })
        : this.setState({
            position : position + 1     //advance one forward in array
        })
    }
    render() {
        let { position } = this.state;
        let { colours } = this.props;

        let divStyle = {
            height: 200,
            width: 200,
            backgroundColor: colours[position]
        }

        return (
            <>
                <h1> Colours </h1>
                <div style = { divStyle } onClick = {this.handleClick}></div>
            </>
        )
    }
}

export default Colours;