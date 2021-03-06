// const Header = ( { children } ) => (
//     <header className="jumbotron"> 
//         <h1>{ children }</h1>
//     </header>
// );

//Header as a class based component

import { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component{

    render() {

        let { children } = this.props;
        
        return (
                <header className="jumbotron"> 
                    <h1>{ children }</h1>
                    <nav className = "navbar">
                        <Link to = "/">Home</Link>
                        <Link to = "/props">Stuff using props</Link>
                        <Link to = "/noprops">Stuff that doesn't use props</Link>
                        <Link to = "/otherstuff">More Stuff</Link>
                        <Link to = "/counters">Things that Count</Link>
                        <Link to = "/forms">Things that are Forms</Link>
                        <Link to = "/games">Things that are Games</Link>
                    </nav>
                </header>
            )
    }

}

export default Header;