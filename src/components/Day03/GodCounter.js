import { Component } from "react";

class GodCounter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        window.addEventListener('click', () => {
            let { count } = this.state;
            return this.setState({
                count : count + 1
            })
        })
    }

    render(){
        return (
            <>
            <br></br>
                <h1>God Counter</h1>
                <p> {this.state.count}</p>
            </>
        )
    }
}

export default GodCounter;