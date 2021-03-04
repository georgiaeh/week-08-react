import { Component } from "react";

let lightboxStyle = {
    position: "fixed",
    zIndex: 1,
    padding: "10px 62px 0px 62px",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : "black"
}

class LightBox extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.state = {
            lightbox : false,
        }
    }

    componentDidMount() {
        
        window.addEventListener('click', () => {
            this.setState({
                lightbox : false
            })
        })

    }

    componentWillUnmount(){
        window.removeEventListener('click', () => {
            this.setState({
                lightbox : false
            })
        })
    }

    handleClick(e) {
        this.setState({
            lightbox : true
        });
        e.stopPropagation();
    }

    render(){

        let imgStyle = {
            maxHeight: "220px",
            maxWidth: "150px",
            height: "auto",
            width: "auto",
            margin: 0,
            padding: "5px"
        }
        let imgLightboxStyle = {
            maxHeight: "90vh",
            maxWidth: "90vh",
            height: "auto",
            width: "auto"
        }

        let { lightbox } = this.state;

        return (
            <>
            <div class="row">
                {this.props.src.map( (image, i) => {
                    return (
                    <figure style = {lightbox ? lightboxStyle :  {} } class="card">
                        <img
                            className="card-img-top"
                            alt = "Spring flowers"
                            src={ image }
                            style = { lightbox ? imgLightboxStyle :  imgStyle}
                            onClick = {this.handleClick}
                            key = {i}
                        />
                        </figure>)
                })}
                
            </div>
            </>
        )
    }
}

export default LightBox;