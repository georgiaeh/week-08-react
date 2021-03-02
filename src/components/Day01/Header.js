// const Header = ( { children } ) => (
//     <header className="jumbotron"> 
//         <h1>{ children }</h1>
//     </header>
// );

//Header as a class based component

import { Component } from "react";

class Header extends Component{

    render() {

        let { children } = this.props;
        
        return (
                <header className="jumbotron"> 
                    <h1>{ children }</h1>
                </header>
            )
    }

}

export default Header;