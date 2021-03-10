import { Component } from 'react';
import { Badge} from 'react-bootstrap';
import axios from "../../axios";
import Comments from "./Comments";


class Article extends Component {
    constructor(props){
        super(props)

        this.state = {
            article: {},
            loaded: false,
            found: true
        }
    }

    componentDidMount(){
        //when componet mounts, use get request to get the article data
        //set loaded to true to stop displaying loading...
        //and start displaying article data


        let { id } = this.props;
        axios.get(`/articles/${id}`).then( (data) => {
            this.setState({
                article: data.data.data,
                loaded: true
            })
        }).catch( () => {
            this.setState({
                loaded: true,
                found: false
            })
        })
    }

    render(){

        let { article, loaded, found } = this.state;

        return !loaded ? <p> Loading .... {this.props.id} </p> :
                !found ? <p> 404 .... Article not found :( </p> :
            (
                <div className="mt-4">
                    <h1>{article.title}</h1>
                    <p>{article.content}</p>
                    {article.tags.map( (tag, index) => <Badge variant="light" key={index}>{tag}</Badge>)}

                    {/* Comments component shows comments and allow for new comments to be added */}
                    <Comments id={article.id} />
                    
                </div>
            )
    }
}

export default Article;