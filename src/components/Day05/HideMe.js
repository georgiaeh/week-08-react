import { Component } from 'react';

class HideMe extends Component {
    constructor(children) {
        super(children)

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            clicked: false
        }
    }

    handleClick(){
        let {clicked} = this.state;
        this.setState({
            clicked : !clicked
        })
    }

    render() {
        let display = this.state.clicked ? "none" : "" ;

        let pStyle = {
            display : display
        }

        return (
            <>
                <h1> Hide Me</h1>
                <p onClick = {this.handleClick} style = {pStyle}> {this.props.children} </p>
            </>
        )
    }
}

export default HideMe;