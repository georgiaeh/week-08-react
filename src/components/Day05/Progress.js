import { Button, ProgressBar } from "react-bootstrap";
import { Component } from 'react';

class Progress extends Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state={
            now: 0
        }
    }

    handleClick(){
        let {now} = this.state;
        this.setState({
            now: now + 10
        })
    }

    render(){
        return (
            <>
                <ProgressBar now={this.state.now} />
                <Button varient="primary" onClick = {this.handleClick} >+</Button>
            </>
        )
    }
}

export default Progress;