import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            submitted : false
        }
    }

    handleChange(e) {

        let field = e.currentTarget.id;

        let stateObject = {
            [field] : e.currentTarget.value
        };
        this.setState(stateObject)
    }

    handleClick(){
        this.setState({
            submitted : true
        })
    }

    render() {

        return (
            <>
                <br></br>
                <h1>Create a Form</h1>
                <form>
                    {this.props.fields.map( (field, index) => {
                        return (
                            <div key = {index}>
                                <label >{field}</label>
                                <input id={field}  
                                    type = "text"
                                    className="form-control" 
                                    onChange={this.handleChange}
                                    style={{ border: this.state.submitted && !this.state.hasOwnProperty(field) ? "2px solid red" : "" }}></input>
                                <p>{ this.state.submitted && !this.state.hasOwnProperty(field) ? "This field is required" : "" }</p>
                            </div>
                        )
                    })}
                    <br></br>
                    <button type="button" className="btn btn-primary" onClick = {this.handleClick}> Submit </button>
                </form>
            </>
            );

    }

}

export default Form;