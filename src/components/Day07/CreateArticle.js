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
        
        if(values.submitted){
            console.log("form submitted")

            let tags = values.tags.split(", ")
            
            this.setState({
                title: values.title,
                content: values.content,
                tags: tags
            })
        } 
    }

    componentDidUpdate(){
        axios.post("/articles", {...this.state}).then( () => {
                return console.log("sent");
            }).catch( (error) => console.log(error))
    }

    render(){

        return (
            <>
                <h1>Create an Article</h1>
                <ArticleForm fields={["title", "content", "tags"]} handleSubmit = {this.handleFormSubmit} />
            </>)
    }
}

export default CreateArticle;