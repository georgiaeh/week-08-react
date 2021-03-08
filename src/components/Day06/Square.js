const Square = ( { selected, colour, handleClick } ) => {
    
    
    let backgroundColor = selected ? colour : "green";

    let squareStyle = {
        backgroundColor :  backgroundColor,
        height: '200px',
        width: '200px',
        border: "2px solid black",
        margin: "20px"
    }
    
    return (<div style={squareStyle} onClick={handleClick}></div>);
    
};

Square.defaultProps = {
    colour: "red"
};

export default Square;