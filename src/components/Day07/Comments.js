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
            loaded: false,
            newcomment: false
        }
    }

    componentDidMount(){
        //when component mounts, use get request to get all comments on article
        //article ID is passed down from parent as a prop

        let { id } = this.props;
        axios.get(`/articles/${id}/comments`).then( (data) => {
            this.setState({
                comments: data.data.data,
                loaded: true,
            })
        })
    }

    handleFormSubmit(values){
        //values is data passed up from ArticleForm to comments
        //values.submitted is the check from the form component that the data is ok to submit
        //-> every field has a not empty string as a value

        //if wanted more checks that data was valid, would include them here (e.g valid email)

        //update state with data passed up from the ArticleForm
        //will trigger componentDidUpdate
        //which handles API requests
        if(values.submitted){
            this.setState({
                email: values.email,
                comment: values.comment,
                newcomment: true
            })
        } 
    }

    componentDidUpdate(){

        //when component updates, only do post request if there is a new comment

        if(this.state.newcomment){
            let { id } = this.props;
            axios.post(`/articles/${id}/comments`, {
                comment: this.state.comment,
                email: this.state.email
            }).then( () => {

                //on successful post of a comment, set email and comment fields to empty strings
                //and set new comment to false 
                this.setState({
                    email: "",
                    comment: "",
                    newcomment: false
                })

                //load all of the comments for the article, including the new comment
                return this.componentDidMount(); 

            }).catch( (error) => console.log(error))
            //log any errors to the console if post request does not succeed
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