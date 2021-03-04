import { Component } from "react";


class ThreeCounters extends Component {
    constructor(props) {
        super(props);

        this.handle1 = this.handle1.bind(this);
        this.handle2 = this.handle2.bind(this);
        this.handle3 = this.handle3.bind(this);
        this.clearNums = this.clearNums.bind(this);

        this.state = {
            value1: 0,
            value2: 0,
            value3: 0
        }
    }

    componentDidMount() {
        let storedState = JSON.parse(window.localStorage.getItem("state"));
        this.setState(storedState);
    }

    componentDidUpdate(){
        localStorage.setItem("state", JSON.stringify(this.state));   
    }

    componentWillUnmount(){
        localStorage.setItem("state", JSON.stringify(this.state)); 
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

    handle3() {
        let { value3 } = this.state;
        this.setState({
            value3: value3 + 1
        })
    }

    clearNums(){
        localStorage.clear();
        this.setState({
            value1: 0,
            value2: 0,
            value3: 0
        })
    }
    
    render(){

        let { value1, value2, value3 } = this.state;

        return (
            <>
            <br></br>
                <h1> Three Counters</h1>
                <div className="jumbotron">
                    <p>
                        <button onClick={ this.handle1 } className="btn btn-lg btn-danger">+</button>
                        <span className="alert alert-danger mr-2 ml-2">{ value1 }</span>
                    </p>
                    <p>
                        <button onClick={ this.handle2 } className="btn btn-lg btn-success">+</button>
                        <span className="alert alert-success mr-2 ml-2">{ value2 }</span>
                    </p>
                    <p>
                        <button onClick={ this.handle3 } className="btn btn-lg btn-primary">+</button>
                        <span className="alert alert-primary mr-2 ml-2">{ value3 }</span>
                    </p>
                    <p>
                        <button onClick={ this.clearNums } className="btn btn-lg btn-warning">Clear Numbers</button>
                    </p>
                </div>
            </>
        )
    }
}

export default ThreeCounters;