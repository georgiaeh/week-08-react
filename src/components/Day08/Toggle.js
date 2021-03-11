import { useState } from "react";

const Toggle = ({initial, alternate}) => {
    const [toggled, setToggled] = useState(true);

    const text = toggled ? initial : alternate;

    const toggleText = () => setToggled(!toggled);

    return (
        <>
            <p> {text} </p>
            <button className = "btn btn-primary" onClick={toggleText}> Toggle </button>
        </>
    )

}

export default Toggle;