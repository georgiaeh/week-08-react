import { Component } from "react";

class TwoCounters extends Component {
    constructor() {
        super()

        this.handle1 = this.handle1.bind(this);
        this.handle2 = this.handle2.bind(this);

        this.state = {
            value1: 0,
            value2: 0
        }
    }

    componentDidMount() {
        document.title = "0";
    }

    componentDidUpdate() {
        let { value1, value2 } = this.state;
        let total = value1 + value2;
        document.title = total;
    }

    handle1() {
        let { value1 } = this.state;
        this.setState({
            value1: value1 + 1
        })
    }

    handle2() {
        let { value2 } = this.state;
        this.setState({
            value2: value2 + 1
        })
    }

    render(){

        let { value1, value2 } = this.state;
        return (
            <>
            <br></br>
                <h1>Two Counters</h1>
                <div className="jumbotron">
                    <p>
                        <button onClick={ this.handle1 } className="btn btn-lg btn-danger">+</button>
                        <span className="alert alert-danger mr-2 ml-2">{ value1 }</span>
                    </p>
                    <p>
                        <button onClick={ this.handle2 } className="btn btn-lg btn-success">+</button>
                        <span className="alert alert-success mr-2 ml-2">{ value2 }</span>
                    </p>
                </div>
            </>
        )
    }
}

export default TwoCounters;