import { Component } from "react";

class LameGame extends Component {
    constructor(props){
        super(props)

        this.startClick = this.startClick.bind(this);
        this.endClick = this.endClick.bind(this);

        this.state = {
            aim : props.aim,
            start : 0,
            time: 0
        }
    }

    startClick() {
        let startTime = Date.now();

        this.setState({
            start: startTime,
        })

    }

    endClick(){
        let endTime = Date.now();
        let { aim } = this.state;
        let { start } = this.state;
        let time = (endTime - start - (aim *1000)) / 1000;

        this.setState({
            time : time
        })
    }

    render(){

        let { start } = this.state;
        let { aim } = this.state;
        let { time } = this.state;

        return (
            <>
                <h1> Lame Game</h1>

                {start === 0 ? <button type="button" className="btn btn-success" onClick = {this.startClick}>Start</button> 
                : time === 0 ? 
                    <>
                    <p> Wait {aim} seconds </p>
                    <button type="button" className="btn btn-warning" onClick = {this.endClick}>Now</button>
                </>
                : time > 0 ? <p> {time}s Too slow! </p> : <p> {time}s Too fast! </p>
                }
            </>
        )
    }
}

export default LameGame;