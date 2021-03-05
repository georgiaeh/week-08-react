import { Component } from "react";
import { ListGroup, Button, Form} from "react-bootstrap";


class NamesList extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    

        this.state = {
            input : "",
            items: []
        }
    }

    handleClick() {

        let { items } = this.state;
        let { input } = this.state;

        this.setState({
            items : [...items, input]
        })
    }

    handleChange(e) {
        this.setState({
            input : e.currentTarget.value
        })
    }

    render() {

        return (
            <>
                <br></br>
                <h1>List</h1>
                <Form.Group>
                    <Form.Label >Add to List</Form.Label>
                    <Form.Control type = "text" onChange = {this.handleChange} value = {this.state.input}/>
                    <Button varaint="primary" onClick = {this.handleClick}> Add</Button>
                </Form.Group>
                <ListGroup>
                    { this.state.items.map( (value, index) => (
                    <ListGroup.Item key={ index }>{ value }</ListGroup.Item>
                    ))}
                </ListGroup>
            </>
            );

    }

}

export default NamesList;