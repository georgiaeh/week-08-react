import { Button } from "react-bootstrap";
import { Component } from 'react';

class MyButton extends Component {
    constructor(){
        super();

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("nice bootstrap button");
    }

    render(){
        return <Button
            variant="primary"
            onClick={ this.handleClick }
            >Nice blue button</Button>
    }
}

export default MyButton;