import { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component{

    render() {
        
        return (
                <footer className="footer"> 
                    <nav className = "navbar">
                        <Link to = "/">Home</Link>
                        <Link to = "/props">Stuff using props</Link>
                        <Link to = "/noprops">Stuff that doesn't use props</Link>
                        <Link to = "/otherstuff">More Stuff</Link>
                        <Link to = "/counters">Things that Count</Link>
                        <Link to = "/forms">Things that are Forms</Link>
                        <Link to = "/games">Things that are Games</Link>
                    </nav>
                </footer>
            )
    }

}

export default Footer;