import { Component } from "react";

class TempConverter extends Component {
    constructor() {
        super();

        this.handleChangeCtoF = this.handleChangeCtoF.bind(this);
        this.handleChangeFtoC = this.handleChangeFtoC.bind(this);

        this.state = {
            c : 0,
            f : 32
        }
    }

    handleChangeCtoF(e) {
        let c = +e.currentTarget.value;

        this.setState({
            c : c,
            f : ((c * (9/5)) + 32).toFixed(2)
        });
    }

    handleChangeFtoC(e) {
        let f = +e.currentTarget.value;

        this.setState({
            c : ((f - 32) * 5 / 9).toFixed(2),
            f : f
        });
    }

    render() {

        return (
            <>
                <br></br>
                <h1>Temperature Converter</h1>
                <div className="form-group">
                    <label for = "fahrenheit" >Fahrenheit</label>
                    <input id = "fahrenheit" type = "number" className="form-control" onChange = {this.handleChangeFtoC} value = {this.state.f}/>
                </div>
                <div className="form-group">
                    <label for = "celsius" >Celsius</label>
                    <input id="celsius" type = "number" className="form-control" onChange = {this.handleChangeCtoF} value = {this.state.c}/>
                </div>
            </>
            );

    }

}

export default TempConverter;