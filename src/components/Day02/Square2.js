import { Component } from "react";

 class Square2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            green : true
        }
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        let { green } = this.state;

        this.setState({
            green: !green
        })
    }

    render() {

        let { green } = this.state;
        let { colour } = this.props;

        let squareStyle = {
                backgroundColor : green ?  colour : 'green',
                height: '200px',
                width: '200px',
            }
        
        return (
            <>
                <br></br>
                <h1>Square Version 2</h1>
                <div style={squareStyle} onClick = {this.handleClick}></div>
            </>
        )
    }

 }


export default Square2;