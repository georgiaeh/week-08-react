import { Component } from 'react';
import { Badge} from 'react-bootstrap';
import axios from "../../axios";
import Comments from "./Comments";


class Article extends Component {
    constructor(props){
        super(props)

        this.state = {
            article: {},
            loaded: false
        }
    }

    componentDidMount(){
        let { id } = this.props;
        axios.get(`/articles/${id}`).then( (data) => {
            this.setState({
                article: data.data.data,
                loaded: true
            })
        })
    }

    render(){

        let { article, loaded } = this.state;

        return !loaded ? <p> Loading .... {this.props.id} </p> :
            (
                <div className="mt-4">
                    <h1>{article.title}</h1>
                    <p>{article.content}</p>
                    {article.tags.map( (tag, index) => <Badge variant="light" key={index}>{tag}</Badge>)}
                    <Comments id={article.id} />
                    
                </div>
            )
    }
}

export default Article;