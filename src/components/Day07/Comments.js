import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import axios from "../../axios";
import ArticleForm from "./Form";

class Comments extends Component{
    constructor(props){
        super(props)
        this.handleFormSubmit = this.handleFormSubmit.bind(this);

        this.state = {
            comments: [],
            loaded: false
        }
    }

    componentDidMount(){
        let { id } = this.props;
        axios.get(`/articles/${id}/comments`).then( (data) => {
            this.setState({
                comments: data.data.data,
                loaded: true,
                newcomment: false
            })
        })
    }

    handleFormSubmit(values){
        if(values.submitted){
            this.setState({
                email: values.email,
                comment: values.comment,
                newcomment: true
            })
        } 
    }

    componentDidUpdate(){
        if(this.state.newcomment){
            let { id } = this.props;
            axios.post(`/articles/${id}/comments`, {
                comment: this.state.comment,
                email: this.state.email
            }).then( () => {
                return this.componentDidMount();
            }).catch( (error) => console.log(error))
        }
        
    }

    render(){

        let { comments, loaded } =this.state;

        return !loaded ? <p>Loading...</p> : 
            (
                <>
                <div className="mt-4">
                    <h3>Comments</h3>
                    <ListGroup>
                    { comments.map( (comment, index) => {
                        return (
                            <ListGroup.Item className="mt-4" key={index}><p>{comment.comment}</p>
                                <small>{comment.email}</small>
                            </ListGroup.Item>
                            )
                    })}
                    </ListGroup>
                </div>
                <div className="mt-4">
                    <h5> Add a new comment </h5>
                    <ArticleForm fields={["comment", "email"]}  handleSubmit = {this.handleFormSubmit}/>
                </div>
                </>
            )
    }
}

export default Comments;