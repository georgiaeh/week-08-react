import { Component } from "react";
import { Form } from 'react-bootstrap';

class ArticleForm extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            submitted : false
        }
    }

    handleChange(e) {
        //when input field changes, get the id (which is the field name)
        //create a new property in the state if it does not exist
        //or update an existing property

        let field = e.currentTarget.id;

        let stateObject = {
            [field] : e.currentTarget.value
        };
        this.setState(stateObject)
    }

    handleClick(e){ 

        //prevent default behaviour of submit button
        e.preventDefault();


        //checks that the state has a property for every field in the prop fields array
        //and that the value for that property is not empty -> all fields completed
        let canSubmit = this.props.fields.every( (field) => {
            if(this.state.hasOwnProperty(field)){
                return this.state[field].length > 0
            } else {
                return false
            }
        })

        //if all fields have been filled out and are not empty,
        //use the handleSubmit function passes in props to
        //pass data up to parent component

        let { handleSubmit } = this.props;
        if(canSubmit){
            handleSubmit({...this.state, submitted: true});
        }
        
    }

    render() {

        return (
            <>
                <Form>
                    {this.props.fields.map( (field, index) => {
                        return (
                            <div key = {index}>
                                <Form.Label >{field}</Form.Label>
                                <Form.Control 
                                    id={field}  
                                    type = "text"
                                    className="form-control" 
                                    onChange={this.handleChange}
                                    style={{ border: this.state.submitted && !this.state.hasOwnProperty(field) ? "2px solid red" : "" }}></Form.Control>
                                <Form.Text>{ this.state.submitted && !this.state.hasOwnProperty(field) ? "This field is required" : "" }</Form.Text>
                            </div>
                        )
                    })}
                    <br></br>
                    <button type="button" className="btn btn-primary" onClick = {this.handleClick}> Submit </button>
                </Form>
            </>
            );

    }

}

export default ArticleForm;