import { Component } from 'react';

class CountBy extends Component {
    constructor(props) {
        super(props)

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
                <h1> Count By</h1>
                <button onClick={ this.handleClick } className="btn btn-lg btn-success"> {this.state.clickCount * this.props.step} </button>
            </>
        )
    }
}

export default CountBy;