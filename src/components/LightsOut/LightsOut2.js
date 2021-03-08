import { Component } from 'react';


class LightsOut2 extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.tick = this.tick.bind(this);

        this.state = {
            one: false,
            two: false,
            three: false,
            four: false,
            five: false,
            six: false,
            seven: false,
            eight: false,
            nine: true,
            moves: 0,
            seconds: 0
        }
    }

    handleClick(e){
        let id = e.currentTarget.id;
        console.log(id);
        let { one, two, three, four, five, six, seven, eight, nine} = this.state;

        switch(id) {
            case "one":
                this.setState({
                    one: !one, two : !two, four : !four, five: !five
                })
                break;
            case "two":
                this.setState({
                    one: !one, three: !three, four : !four, five: !five, six: !six, two: !two
                })
                break;
            case "three":
                this.setState({
                    two: !two, five: !five, six: !six, three: !three
                })
                break;
            case "four":
                this.setState({
                    one: !one, two: !two, four: !four, five: !five, seven: !seven, eight : !eight
                })
                break;
            case "five":
                this.setState({
                    one: !one, two: !two, three: !three, four : !four, five: !five, six: !six, seven: !seven, eight : !eight, nine: !nine
                })
                break;
            case "six":
                this.setState({
                    two: !two, three: !three, five: !five, eight : !eight, nine: !nine, six: !six
                })
                break;
            case "seven":
                this.setState({
                    four: !four, five: !five, eight : !eight, seven: !seven
                })
                break;
            case "eight":
                this.setState({
                    four: !four, five: !five, six: !six, seven: !seven, eight: !eight, nine: !nine
                })
                break;
            case "nine":
                this.setState({
                    five: !five, six: !six, eight: !eight, nine: !nine
                })
                break;
            default:
                console.log("something broke")
        }

        let {moves} = this.state;
        this.setState({
            moves: moves + 1
        })
    }

    componentDidMount() {
        this.intervalID = setInterval(this.tick, 1000);
        console.log("mounted");
    }

    tick(){
        let {seconds} = this.state;
        this.setState({
            seconds: parseInt(seconds) + 1
        })
    }

    render(){

        let divStyle ={
            border: "1px solid black",
            height: "200px",
            width: "200px"
        }
        return (
            <>
            <h1>Lights Out</h1>
            <div style={{display: "flex", flexdirection: "row"}}>
                <div id = "one" style={{...divStyle, backgroundColor : this.state.one ? "darkgrey" : "white"}} onClick={this.handleClick}></div>
                <div id = "two" style={{...divStyle, backgroundColor : this.state.two ? "darkgrey" : "white"}} onClick={this.handleClick}></div>
                <div id = "three" style={{...divStyle, backgroundColor : this.state.three ? "darkgrey" : "white"}} onClick={this.handleClick}></div>
            </div>
            <div style={{display: "flex", flexdirection: "row"}}>
                <div id = "four" style={{...divStyle, backgroundColor : this.state.four ? "darkgrey" : "white"}} onClick={this.handleClick}></div>
                <div id = "five" style={{...divStyle, backgroundColor : this.state.five ? "darkgrey" : "white"}} onClick={this.handleClick}></div>
                <div id = "six" style={{...divStyle, backgroundColor : this.state.six ? "darkgrey" : "white"}} onClick={this.handleClick}></div>
            </div>
            <div style={{display: "flex", flexdirection: "row"}}>
                <div id = "seven" style={{...divStyle, backgroundColor : this.state.seven ? "darkgrey" : "white"}} onClick={this.handleClick}></div>
                <div id = "eight" style={{...divStyle, backgroundColor : this.state.eight ? "darkgrey" : "white"}} onClick={this.handleClick}></div>
                <div id = "nine" style={{...divStyle, backgroundColor : this.state.nine ? "darkgrey" : "white"}} onClick={this.handleClick}></div>
            </div>
            <p> Moves: {this.state.moves}</p>
            <p> Time: {this.state.seconds}s</p>
            </>
        )
    }
}

export default LightsOut2;