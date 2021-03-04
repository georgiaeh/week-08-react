import { Component } from "react";


class Timer extends Component {
    constructor(props) {
        super(props)

        this.reduceTime = this.reduceTime.bind(this);

        this.intervalID = null;

        this.state = {
            time : this.props.start
        }
    }

    reduceTime(){
        let {time} = this.state;
        if(time > 0){
            this.setState({
                time: time - 1
            }) 
        } else {
            this.componentWillUnmount();
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(this.reduceTime, 1000);
        console.log("mounted");
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
        console.log("unmounted");
    }

    render(){
        return (
            <>
                <h1> Timer </h1>
                <h6> {this.state.time} </h6>
            </>
        )
    }
}

export default Timer;