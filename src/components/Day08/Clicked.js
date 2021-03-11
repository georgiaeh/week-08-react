import { useState } from "react";
const Clicks = () => {
    const [clicks, setClicks] = useState(0)

    const addClick = () => setClicks(clicks + 1);

    return <button className="btn btn-primary" onClick = {addClick} > {clicks} </button>
}

export default Clicks;