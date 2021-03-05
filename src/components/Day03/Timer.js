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
            clearInterval(this.intervalID); //if the component is still mounted when the timer reaches 0, clear the interval as it is no longer needed
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(this.reduceTime, 1000);
        console.log("mounted");
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
        //if the timer is still running when the componenet is unmounted (e.g moving to a different page, page refresh) then clear the timer as it's no longer needed
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