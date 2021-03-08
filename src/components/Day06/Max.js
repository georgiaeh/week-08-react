import { Component } from "react";
import Counter from "./Counter";

class Max extends Component {
    constructor(props){
        super(props)

        this.handleClickIncrease = this.handleClickIncrease.bind(this)
        this.handleClickDecrease = this.handleClickDecrease.bind(this)
        this.state = {
           values: [...props.count]
        }
    }

    handleClickIncrease(index){

        let current = this.state.values[index];
        let values = [...this.state.values];

        values[index] = current + 1;

        this.setState({
            values : values
        })
    }

    handleClickDecrease(index){

        let current = this.state.values[index];
        let values = [...this.state.values];

        if(values[index] > 0){
            values[index] = current - 1;
        }

        this.setState({
            values : values
        })
    }

    render(){

        let { count } = this.props;
        let { values } = this.state;

        let indexLargestVal = values.indexOf(Math.max(...values));        

        return (
            <>
                {count.map( (number, index) => {
                    return <Counter
                            id = {index}
                            key = {index}
                            onClickIncrease = {() => this.handleClickIncrease(index)} 
                            onClickDecrease = {() => this.handleClickDecrease(index)} 
                            value = {this.state.values[index]}
                            largest = { index === indexLargestVal }
                            />
                })}
            </>
        )
    }
}

export default Max;