// const squareStyle = {
//     backgroundColor: 'red',
//     height: '200px',
//     width: '200px',
// }

const Square = ( { colour } ) => {
    
    // !!colour ? squareStyle.backgroundColor = colour : squareStyle.backgroundColor = Square.defaultProps.colour;
    
    return <div style={{
        backgroundColor: colour,
        height: '200px',
        width: '200px'}}>
    </div>
};

Square.defaultProps = {
    colour: "red"
};

export default Square;