import { useState } from "react";

const CounterHooks = ({initial, step, max}) => {

    const [count, setCount] = useState(initial);

    const increaseCount = () => {
        if(count <= (max-step)){
            setCount(count + step)};
        }

    const decreaseCount = () => {
        if(count >= (step)){
            setCount(count - step)};
        }

    return (
        <>
            <p>{count}</p>
            <button className="btn btn-primary" onClick={increaseCount}>+</button>
            <button className="btn btn-danger" onClick={decreaseCount}>-</button>
        </>
    )
}

export default CounterHooks;