import { Component } from 'react';
import Square from './Square';

class Squares extends Component 
{
    constructor(props){
        super(props)

        this.state ={
            selected: 1
        }
    }
    render() {

        return (
            <>
                <Square 
                    selected = {this.state.selected === 1}
                    colour = {this.props.colour}
                    handleClick = { () => this.setState({selected: 1})}
                />
                <Square 
                    selected = {this.state.selected === 2}
                    colour = {this.props.colour}
                    handleClick = { () => this.setState({selected: 2})}
                />
            </>
        )
    }
}

export default Squares;