import { Component } from "react";

class Price extends Component {


    state = {
        price: this.props.price,
        currency: this.props.currency
    };


    ChangeCurrency = () => {
        if (this.state.currency === "USD") {
            this.setState({
                price: this.state.price * 400,
                currency: "AMD"
            })
        }
        if (this.state.currency === "AMD") {
            this.setState({
                price: this.state.price / 400,
                currency: "USD"
            })
        }
    }

    render() {
        return (
            <div>
                <li>Price : {this.state.price + this.state.currency} </li>
                <button onClick={this.ChangeCurrency}> Change Currency  </button>
            </div>
        )
    }
}

export default Price