import { Component } from "react";

class List extends Component {
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
                <div className="form-group">
                    <label >Add to List</label>
                    <input type = "text" className="form-control" onChange = {this.handleChange} value = {this.state.input}/>
                    <button type="button" className="btn btn-primary" onClick = {this.handleClick}> Add</button>
                </div>
                <ul className = "list-group">
                    { this.state.items.map( (value, index) => (
                    <li className = "list-group-item" key={ index }>{ value }</li>
                    ))}
                </ul>
            </>
            );

    }

}

export default List;