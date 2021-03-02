const Square = ( { colour } ) => {
    
    let squareStyle = {
        backgroundColor : colour,
        height: '200px',
        width: '200px',
    }
    
    return (<div style={squareStyle}></div>);
    
};

Square.defaultProps = {
    colour: "red"
};

export default Square;