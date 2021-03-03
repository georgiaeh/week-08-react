import { Component } from "react";

class CatchMeIfYouCan extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            top : 0
        }
    }

    handleClick() {
        let { top } = this.state;
        let { jump } = this.props;
        
        this.setState(
            {
                top : top + jump
            }
        )
    }

    render() {

        let { top } = this.state;
        let style = {
            position : "relative",
            top : top
        }

        return (<button type="button" className="btn btn-warning" onClick = {this.handleClick} style = {style} > Catch Me </button>)
    }
}

export default CatchMeIfYouCan;