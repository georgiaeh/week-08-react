import { Component } from 'react';

class EvenClick extends Component {
    constructor() {
        super()

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            clickCount : 0
        }
    }

    handleClick(){
        let {clickCount} = this.state;
        this.setState({
            clickCount : clickCount + 1
        })
    }

    render() {
        
        return (
            <>
                <h1> Even Clicks</h1>
                <button onClick={ this.handleClick } className="btn btn-lg btn-success"> {this.state.clickCount % 2 === 0 ? "Even" : "Odd"} </button>
            </>
        )
    }
}

export default EvenClick