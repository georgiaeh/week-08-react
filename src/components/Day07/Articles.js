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
        //use get request to get all articles

        axios.get("/articles").then( (data) => {
            this.setState({
                articles: data.data.data,
                loaded: true
            })
        })
    }

    render(){

        let { articles, loaded } = this.state;

        //when articles data has been loaded, display article title and tags

        return !loaded ? <p> Loading .... </p> :
            (
                <>
                <h1>Articles</h1>
                    <ListGroup>
                    {articles.map( (article, index) => {
                        return (
                        <ListGroup.Item key={index}> 
                            <a href={`/news/${article.id}`}>{article.title}</a>
                            {article.tags.map( tag => <Badge variant="light" key={tag} className="float-right">{tag}</Badge>)}
                        </ListGroup.Item>
                        )
                    })}
                    </ListGroup>
                    

                </>
            )
    }
}

export default Articles;