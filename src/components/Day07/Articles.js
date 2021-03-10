import { Component } from 'react';
import { ListGroup, Badge} from 'react-bootstrap';
import axios from "../../axios";

class Articles extends Component {
    constructor(){
        super()

        this.state = {
            articles: [],
            loaded: false
        }
    }

    componentDidMount(){
        axios.get("/articles").then( (data) => {
            this.setState({
                articles: data.data.data,
                loaded: true
            })
            console.log(data)
        })
    }

    render(){

        let { articles, loaded } = this.state;

        return !loaded ? <p> Loading .... </p> :
            (
                <>
                <h1>Articles</h1>
                    <ListGroup>
                    {articles.map( (article, index) => {
                        return (
                        <ListGroup.Item key={index}> 
                            <a href={`/news/${article.id}`}>{article.title}</a>
                            {article.tags.map( (tag, index) => <Badge variant="light" key={index} className="float-right">{tag}</Badge>)}
                        </ListGroup.Item>
                        )
                        
                    })}
                    </ListGroup>
                    

                </>
            )
    }
}

export default Articles;