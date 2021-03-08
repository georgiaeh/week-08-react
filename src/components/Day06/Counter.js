const Counter = (props) => {
    return (
        <>
            <button type="button" className="btn btn-success" onClick = {props.onClickIncrease}> + </button>
            <button type="button" className="btn btn-danger" onClick = {props.onClickDecrease}> - </button>
            <p style = {props.largest ? {border: "2px solid red"} : {}}> {props.value} </p> 
        </>
    )


}

export default Counter;