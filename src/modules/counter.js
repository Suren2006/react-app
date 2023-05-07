import { Component } from "react";

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    PlusFunction = () => {
        this.setState({
            value: this.state.value + 1
        })
    }
    MinusFunction = () => {
        this.setState({
            value: this.state.value - 1
        })
    }

    render() {
        return (
            <div className="counter">
                <h4> {this.state.value} </h4>
                <div>
                    <button onClick={this.MinusFunction} className="btn">-</button>
                    <button onClick={this.PlusFunction} className="btn">+</button>
                </div>
            </div>
        );
    }
}

export default Counter