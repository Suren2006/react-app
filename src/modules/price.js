import { Component } from "react";

class Price extends Component {
    constructor(props) {
        super(props);
        this.price = props.price
    }


    render() {
        return (
            <li>Price : {this.price}</li>
        )
    }
}

export default Price