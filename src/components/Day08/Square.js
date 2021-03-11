import { useState } from "react";

const Square = ( {colour} ) => {
    const [green, setGreen] = useState(true);

    const colourChange = () => setGreen(!green);

    const squareStyle = {
        backgroundColor : green ? colour : "green",
        height: '200px',
        width: '200px',
    }

    return <div style={squareStyle} onClick={colourChange}></div>
}

export default Square;