import { Component } from "react";

class Price extends Component {


    state = {
        price: this.props.price,
        currency: this.props.currency
    };


    changeCurrency = () => {
        if (this.state.currency === "$") {
            this.setState({
                price: this.state.price * 400,
                currency: "֏"
            })
        }
        if (this.state.currency === "֏") {
            this.setState({
                price: this.state.price / 400,
                currency: "$"
            })
        }
    }

    render() {
        return (
            <td>
                <span>{this.state.price + this.state.currency} </span>
                <button onClick={this.changeCurrency}> Change Currency  </button>
            </td>
        )
    }
}

export default Price