// const People = ( {names} ) => (
//     names ? (<ul className="list-group">
//         { names.map( (value, index) => (
//             <li className="list-group-item" key={ index }>{ value }</li>
//         ))}
//     </ul>) : 
//    <p>Nothing to see here</p>
// );

//People as a class based component

import { Component } from "react";

class People extends Component {

    constructor( props ) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("hello, world!");
    }

    render() {

        let { names } = this.props;

        return (names ? 
            (<ul className = "list-group" onClick = {this.handleClick}>
                { names.map( (value, index) => (
                    <li className = "list-group-item" key={ index }>{ value }</li>
            ))}
             </ul>) : 
             <p>Nothing to see here</p>)
    }

}


export default People;