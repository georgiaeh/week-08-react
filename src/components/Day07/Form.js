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

        let field = e.currentTarget.id;

        let stateObject = {
            [field] : e.currentTarget.value
        };
        this.setState(stateObject)
    }

    handleClick(e){ 
        e.preventDefault();
        this.setState({
            submitted: true
        })

        let { handleSubmit } = this.props;

        handleSubmit({...this.state, submitted: true});
    }

    render() {

        return (
            <>
                <Form>
                    {this.props.fields.map( (field, index) => {
                        return (
                            <div key = {index}>
                                <Form.Label >{field}</Form.Label>
                                <Form.Control id={field}  
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