import { Component } from 'react';
import axios from "../../axios";
import ArticleForm from "../Day07/Form";

class CreateArticle extends Component {
    constructor(props){
        super(props)
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            
        }
    }

    handleFormSubmit(values){
        //values is data passed up from ArticleForm component to Create Article
        //values.submitted is the check from the Form component that the data is ok to submit
        //-> every field has a not empty string as a value
        
        if(values.submitted){

            //split the tags in to array -> API expects an array
            let tags = values.tags.split(", ")
            
            //update state with data passed up from the ArticleForm
            //will trigger componentDidUpdate
            //which handles API requests
            this.setState({
                title: values.title,
                content: values.content,
                tags: tags
            })
        } 
    }

    componentDidUpdate(){
        //upon state update, send post request to create a new article

        axios.post("/articles", {...this.state}).then( () => {
                return console.log("sent");
            }).catch( (error) => console.log(error))
    }

    render(){

        //uses ArticleForm component to render a form for creating a new article
        return (
            <>
                <h1>Create an Article</h1>
                <ArticleForm fields={["title", "content", "tags"]} handleSubmit = {this.handleFormSubmit} />
            </>)
    }
}

export default CreateArticle;